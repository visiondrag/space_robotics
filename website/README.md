# Website

The site is generated from the repository's Markdown by `build.py`, so the Markdown files stay the single source of truth. Edit a `.md` file, merge to `main`, and the site updates.

## Preview locally
```bash
pip install markdown pillow
python website/build.py          # writes ./_site (git-ignored)
python -m http.server -d _site 8000
```
Open http://localhost:8000. The build fails on any broken internal link or anchor.

## Publish with GitHub Pages
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
After that, every push to `main` that changes Markdown, `library/`, `assets/` or `website/` runs `.github/workflows/pages.yml` and deploys. The site appears at `https://<user>.github.io/<repo>/`. A custom domain can be set under the same Pages settings.

## What it does
- Sidebar navigation (edit the `NAV` list in `build.py` to add a page), per-page table of contents, dark and light themes.
- Site-wide search over every list entry and table row (press `/`), plus a filter box on long pages.
- Heading anchors match GitHub's, so links in the Markdown keep working on the site and on GitHub.
- `library/` PDFs are copied into the site and listed on a Library page.
