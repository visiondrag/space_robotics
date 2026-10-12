#!/usr/bin/env python3
"""Build the static site from the repo's Markdown into ./_site.

Usage: python website/build.py [--out _site]
Requires: markdown (pip install markdown). Optional: pillow (resizes the banner).
Fails (exit 1) on any broken internal link or anchor.
"""
import html, json, os, re, shutil, sys, posixpath
from pathlib import Path
import markdown

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / (sys.argv[sys.argv.index("--out") + 1] if "--out" in sys.argv else "_site")
REPO = "https://github.com/visiondrag/space_robotics"
SITE_NAME = "Space Robotics"
TAGLINE = "A curated path into space robotics: planetary rovers, satellites, and the AI that drives them."

# Sidebar structure. Strings are repo paths of Markdown files ("library/" is generated).
NAV = [
    ("Home", "README.md"),
    ("Learning", "docs/learning/README.md"),
    ("Papers", [
        "docs/papers/README.md", "docs/papers/satellites.md", "docs/papers/ai-vlm.md",
        "docs/papers/vlas-for-driving.md", "docs/papers/efficient-inference.md"]),
    ("Datasets", [
        "datasets/README.md", "datasets/mars/AI4Mars.md", "datasets/mars/MarsScapes.md",
        "datasets/mars/S5Mars.md", "datasets/mars/Curiosity_surface_images.md",
        "datasets/mars/MarsData_Mars-Bench.md", "datasets/mars/orbital-and-benchmarks.md",
        "datasets/moon/lunar-datasets.md", "datasets/satellite/spacecraft-vision.md",
        "datasets/misc-links.md"]),
    ("Tools", "docs/tools/README.md"),
    ("Missions & reports", ["docs/missions-and-reports/README.md", "docs/missions-and-reports/moon-base.md"]),
    ("Competitions", "docs/competitions.md"),
    ("Organizations", "docs/organizations.md"),
    ("Library (PDFs)", "library/"),
    ("Contribute", "CONTRIBUTING.md"),
]
SHORT = {  # nicer sidebar labels than the page h1
    "README.md": "Home", "docs/papers/README.md": "Planetary & surface robotics",
    "docs/papers/satellites.md": "Satellites & orbital", "docs/papers/ai-vlm.md": "AI, VLMs & agents",
    "docs/papers/vlas-for-driving.md": "VLAs for driving", "docs/papers/efficient-inference.md": "Efficient inference",
    "datasets/README.md": "Overview", "datasets/mars/AI4Mars.md": "AI4Mars", "datasets/mars/MarsScapes.md": "MarsScapes",
    "datasets/mars/S5Mars.md": "S5Mars", "datasets/mars/Curiosity_surface_images.md": "Curiosity images",
    "datasets/mars/MarsData_Mars-Bench.md": "MarsData & Mars-Bench", "datasets/mars/orbital-and-benchmarks.md": "Mars orbital & benchmarks",
    "datasets/moon/lunar-datasets.md": "Lunar datasets", "datasets/satellite/spacecraft-vision.md": "Satellite & spacecraft",
    "datasets/misc-links.md": "More (unsorted)", "docs/missions-and-reports/README.md": "Reports & documents",
    "docs/missions-and-reports/moon-base.md": "NASA Moon Base",
}

errors = []

def slugify(value, sep="-"):
    """GitHub-style heading anchors, so existing README links keep working."""
    v = re.sub(r"[^\w\- ]", "", value.strip().lower())
    return re.sub(r" ", sep, v)

def page_url(md_path: str) -> str:
    p = md_path
    if p.endswith("README.md"):
        return p[: -len("README.md")] + "index.html"
    return p[:-3] + ".html"

def rel(from_url: str, to_url: str) -> str:
    return posixpath.relpath(to_url, posixpath.dirname(from_url) or ".")

def md_files():
    out = []
    for p in sorted(ROOT.rglob("*.md")):
        r = p.relative_to(ROOT).as_posix()
        if r.startswith((".git/", ".github/", "_site/", "website/")):
            continue
        out.append(r)
    return out

def autolink_bare_urls(text):
    def fix(line):
        if "](" in line or "<http" in line:
            return line
        return re.sub(r"(?<![\(<\"'])\bhttps?://[^\s)<>\]]+", lambda m: f"<{m.group(0)}>", line)
    return "\n".join(fix(l) for l in text.split("\n"))

class Page:
    def __init__(self, path):
        self.path = path
        self.url = page_url(path)
        text = (ROOT / path).read_text(encoding="utf-8")
        self.src = text
        m = re.search(r"^# (.+)$", text, re.M)
        self.title = m.group(1).strip() if m else Path(path).stem
        md = markdown.Markdown(extensions=["tables", "fenced_code", "toc", "sane_lists"],
                               extension_configs={"toc": {"slugify": slugify, "toc_depth": "2-3"}})
        self.html = md.convert(autolink_bare_urls(text))
        self.toc = [t for h1 in md.toc_tokens for t in (h1["children"] if h1["level"] == 1 else [h1])]
        self.ids = set(re.findall(r'id="([^"]+)"', self.html))

def flatten(tokens, acc=None):
    acc = acc if acc is not None else []
    for t in tokens:
        acc.append(t)
        flatten(t["children"], acc)
    return acc

def resolve_links(page: Page, pages: dict, lib_exists: bool):
    def sub(m):
        attr, val = m.group(1), m.group(2)
        if re.match(r"^(https?:|mailto:|#)", val):
            if val.startswith("http"):
                return m.group(0)
            if val.startswith("#"):
                if val[1:] not in page.ids:
                    errors.append(f"{page.path}: missing anchor {val}")
                return m.group(0)
            return m.group(0)
        path, _, frag = val.partition("#")
        target = posixpath.normpath(posixpath.join(posixpath.dirname(page.path), path))
        if target.endswith(".md"):
            if target not in pages:
                errors.append(f"{page.path}: broken link {val}")
                return m.group(0)
            if frag and frag not in pages[target].ids:
                errors.append(f"{page.path}: missing anchor #{frag} in {target}")
            return f'{attr}="{rel(page.url, pages[target].url)}{"#" + frag if frag else ""}"'
        if target.rstrip("/") == "library" and lib_exists:
            return f'{attr}="{rel(page.url, "library/index.html")}"'
        if (ROOT / target).is_dir() and (ROOT / target / "README.md").exists():
            return f'{attr}="{rel(page.url, pages[target.rstrip("/") + "/README.md"].url)}"'
        if target.startswith(("library/", "assets/")) and (ROOT / target).exists():
            return f'{attr}="{rel(page.url, target)}"'
        if (ROOT / target).is_dir():
            return f'{attr}="{REPO}/tree/main/{target}" target="_blank" rel="noopener"'
        if (ROOT / target).exists():
            return f'{attr}="{REPO}/blob/main/{target}" target="_blank" rel="noopener"'
        errors.append(f"{page.path}: broken link {val}")
        return m.group(0)
    page.html = re.sub(r'(href|src)="([^"]*)"', sub, page.html)
    page.html = re.sub(r'<a href="(https?://[^"]+)"', r'<a href="\1" target="_blank" rel="noopener"', page.html)
    page.html = re.sub(r"<table>", '<div class="table-wrap"><table>', page.html)
    page.html = re.sub(r"</table>", "</table></div>", page.html)

def strip_md(s):
    s = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", s)
    s = re.sub(r"[*_`]", "", s)
    return re.sub(r"\s+", " ", s).strip()

def build_search(pages):
    idx = []
    for pg in pages.values():
        if pg.path in ("README.md", "CONTRIBUTING.md"):
            continue  # navigation/meta pages, not resources
        section, sec_id = pg.title, ""
        for line in pg.src.split("\n"):
            h = re.match(r"^(#{2,3}) (.+)$", line)
            if h:
                section, sec_id = h.group(2).strip(), slugify(h.group(2))
                continue
            if re.match(r"^\s*([-*]|\d+\.) ", line) or (line.startswith("|") and not re.match(r"^\|[\s\-|:]+\|?$", line)):
                body = re.sub(r"^\s*([-*]|\d+\.) ", "", line)
                if line.startswith("|"):
                    cells = [c.strip() for c in line.strip("|").split("|")]
                    if cells and cells[0] in ("Name", "Tool", "Section", "Competition", "Who"):
                        continue
                    body = " — ".join(c for c in cells if c)
                urls = re.findall(r"\]\((https?://[^)\s]+)\)", line) + re.findall(r"<(https?://[^>]+)>", line)
                text = re.sub(r"\s*—\s*\S+\.md\b", "", strip_md(body))
                text = re.sub(r"[\s:·\-—]*\b(File|Link)\b([\s·\-—]*\b(File|Link)\b)*$", "", text)
                if len(text) < 8:
                    continue
                idx.append({"t": text[:220], "p": SHORT.get(pg.path, pg.title), "s": section,
                            "h": pg.url + ("#" + sec_id if sec_id else ""), "u": urls[0] if urls else ""})
    return idx

def count_entries(pg):
    return len([l for l in pg.src.split("\n") if re.match(r"^(- |\| )", l) and "http" in l])

def nav_html(pages, current_url, lib_exists):
    out = []
    def link(path, label=None):
        if path == "library/":
            if not lib_exists: return ""
            url, label = "library/index.html", label or "Library"
        else:
            pg = pages[path]; url = pg.url; label = SHORT.get(path, label or pg.title)
        cur = ' aria-current="page"' if url == current_url else ""
        return f'<a href="{rel(current_url, url)}"{cur}>{html.escape(label)}</a>'
    for label, target in NAV:
        if isinstance(target, str):
            out.append(f'<div class="nav-item">{link(target, label)}</div>')
        else:
            urls = [pages[t].url for t in target]
            open_attr = " open" if current_url in urls else ""
            out.append(f'<details{open_attr}><summary>{html.escape(label)}</summary>' +
                       "".join(link(t) for t in target) + "</details>")
    return "\n".join(out)

TEMPLATE = (ROOT / "website" / "template.html").read_text(encoding="utf-8")

def render(pg, pages, lib_exists, home=False, body=None, title=None, toc=None):
    body = body if body is not None else pg.html
    title = title or pg.title
    toc = toc if toc is not None else pg.toc
    toc_html = ""
    flat = flatten(toc)
    if len(flat) >= 3:
        toc_html = "<nav class=\"toc\" aria-label=\"On this page\"><h2>On this page</h2><ul>" + "".join(
            f'<li class="l{t["level"]}"><a href="#{t["id"]}">{html.escape(strip_md(t["name"]))}</a></li>' for t in flat) + "</ul></nav>"
    url = pg.url if pg else "library/index.html"
    prefix = rel(url, "x").replace("x", "") or "./"
    edit = f'{REPO}/edit/main/{pg.path}' if pg else REPO
    page = TEMPLATE
    repl = {
        "{{TITLE}}": html.escape(title if home is False else SITE_NAME) + ("" if home else f" · {SITE_NAME}"),
        "{{PREFIX}}": prefix, "{{NAV}}": nav_html(pages, url, lib_exists),
        "{{BODY}}": body, "{{TOC}}": toc_html, "{{EDIT}}": edit, "{{REPO}}": REPO,
        "{{CLASS}}": "home" if home else "doc", "{{SITE}}": SITE_NAME,
        "{{DESC}}": html.escape(TAGLINE),
    }
    for k, v in repl.items():
        page = page.replace(k, v)
    return page

def home_hero(pages):
    def n(p): return count_entries(pages[p])
    stats = [
        (sum(count_entries(pages[p]) for p in ("docs/papers/README.md", "docs/papers/satellites.md", "docs/papers/ai-vlm.md")), "papers & references"),
        (sum(count_entries(pages[p]) for p in pages if p.startswith("datasets/")), "dataset entries"),
        (n("docs/tools/README.md"), "tools & portals"),
        (n("docs/competitions.md"), "competitions"),
    ]
    chips = "".join(f'<li><b>{v}</b><span>{html.escape(l)}</span></li>' for v, l in stats)
    return (f'<section class="hero"><div class="hero-inner"><p class="eyebrow">Open learning path</p>'
            f'<h1>{SITE_NAME}</h1><p class="lead">{html.escape(TAGLINE)}</p>'
            f'<div class="cta"><a class="btn primary" href="docs/learning/index.html">Start learning</a>'
            f'<a class="btn" href="docs/papers/index.html">Browse papers</a>'
            f'<button class="btn" id="hero-search" type="button">Search everything <kbd>/</kbd></button></div>'
            f'<ul class="stats">{chips}</ul></div></section>')

def library_page(pages):
    lib = ROOT / "library"
    rows = []
    for sub in sorted(p for p in lib.iterdir() if p.is_dir()):
        items = "".join(
            f'<li><a href="{sub.name}/{html.escape(f.name)}">{html.escape(f.stem.replace("_", " "))}</a>'
            f' <span class="muted">{f.stat().st_size/1e6:.1f} MB</span></li>' for f in sorted(sub.glob("*.pdf")))
        rows.append(f"<h2 id=\"{sub.name}\">{sub.name.title()}</h2><ul>{items}</ul>")
    body = ("<h1>Library</h1><p>Local PDF copies of freely redistributable papers, reports and proposals. "
            "IEEE and other restricted papers are link-only in the paper lists. Files keep their original licenses; "
            "see the repository <a href=\"" + REPO + "/blob/main/LICENSE\" target=\"_blank\" rel=\"noopener\">LICENSE</a>.</p>" + "".join(rows))
    toc = [{"level": 2, "id": s.name, "name": s.name.title(), "children": []} for s in sorted(p for p in lib.iterdir() if p.is_dir())]
    return body, toc

def main():
    if OUT.exists(): shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    pages = {p: Page(p) for p in md_files()}
    lib_exists = (ROOT / "library").is_dir()
    for pg in pages.values():
        resolve_links(pg, pages, lib_exists)
    for needed in [p for t in NAV for p in ([t[1]] if isinstance(t[1], str) else t[1]) if p.endswith(".md")]:
        if needed not in pages: errors.append(f"nav references missing file {needed}")
    # pages not in nav still get built but warn
    in_nav = {p for _, t in NAV for p in ([t] if isinstance(t, str) else t)}
    for p in pages:
        if p not in in_nav: print(f"note: {p} is built but not in the sidebar")
    if errors:
        print("\n".join(sorted(set(errors)))); sys.exit(1)

    for pg in pages.values():
        home = pg.path == "README.md"
        body = pg.html
        if home:
            body = re.sub(r"^\s*<h1[^>]*>.*?</h1>\s*", "", body, count=1, flags=re.S)
            body = re.sub(r"<p><img[^>]*></p>\s*", "", body, count=1)
            body = home_hero(pages) + '<div class="prose">' + body + "</div>"
        else:
            body = '<div class="prose">' + body + "</div>"
        dest = OUT / pg.url
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(render(pg, pages, lib_exists, home=home, body=body), encoding="utf-8")

    for d in ("library",):
        if (ROOT / d).is_dir(): shutil.copytree(ROOT / d, OUT / d)
    (OUT / "assets").mkdir(exist_ok=True)
    banner = ROOT / "assets" / "futuristic_interplanetary_system.png"
    try:
        from PIL import Image
        im = Image.open(banner).convert("RGB"); im.thumbnail((1800, 1000)); im.save(OUT / "assets" / "banner.jpg", quality=78, optimize=True)
    except Exception:
        shutil.copy(banner, OUT / "assets" / "banner.jpg")
    shutil.copytree(ROOT / "website" / "static", OUT / "static")
    if lib_exists:
        body, toc = library_page(pages)
        lp = OUT / "library" / "index.html"
        lp.write_text(render(None, pages, lib_exists, body='<div class="prose">' + body + "</div>", title="Library", toc=toc), encoding="utf-8")
    (OUT / "search-index.json").write_text(json.dumps(build_search(pages), ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    (OUT / ".nojekyll").write_text("")
    print(f"built {len(pages)} pages -> {OUT}")

if __name__ == "__main__":
    main()
