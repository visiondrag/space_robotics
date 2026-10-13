(function () {
  "use strict";
  var body = document.body, prefix = body.getAttribute("data-prefix") || "";
  var $ = function (s, r) { return (r || document).querySelector(s); };

  // theme toggle
  var tb = $("#theme-btn");
  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  if (tb) tb.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // mobile nav
  var mb = $("#menu-btn");
  if (mb) mb.addEventListener("click", function () {
    var open = body.classList.toggle("nav-open");
    mb.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.addEventListener("click", function (e) {
    if (body.classList.contains("nav-open") && !e.target.closest("#sidebar") && !e.target.closest("#menu-btn")) {
      body.classList.remove("nav-open"); if (mb) mb.setAttribute("aria-expanded", "false");
    }
  });

  // search
  var input = $("#search"), box = $("#results"), index = null, loading = null, sel = -1, cur = [];
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function load() {
    if (index) return Promise.resolve(index);
    if (!loading) loading = fetch(prefix + "search-index.json").then(function (r) { return r.json(); })
      .then(function (j) { index = j; return j; }).catch(function () { index = []; return index; });
    return loading;
  }
  function hl(text, terms) {
    var out = esc(text);
    terms.forEach(function (t) {
      if (!t) return;
      out = out.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
    });
    return out;
  }
  function search(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    var res = [];
    index.forEach(function (it) {
      var hay = (it.t + " " + it.s + " " + it.p).toLowerCase(), score = 0;
      for (var i = 0; i < terms.length; i++) {
        var p = hay.indexOf(terms[i]);
        if (p < 0) return;
        score += it.t.toLowerCase().indexOf(terms[i]) >= 0 ? 3 : 1;
        if (p === 0) score += 2;
      }
      res.push([score, it]);
    });
    res.sort(function (a, b) { return b[0] - a[0]; });
    return res.slice(0, 40).map(function (r) { return r[1]; });
  }
  function render(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    cur = search(q); sel = -1;
    if (!q.trim()) { box.hidden = true; input.setAttribute("aria-expanded", "false"); return; }
    box.innerHTML = cur.length ? cur.map(function (it, i) {
      return '<a href="' + prefix + it.h + '" role="option" data-i="' + i + '"><span class="rt">' + hl(it.t, terms) +
        '</span><span class="rm">' + esc(it.p) + " › " + esc(it.s) + "</span></a>";
    }).join("") : '<div class="empty">No results for “' + esc(q) + "”.</div>";
    box.hidden = false; input.setAttribute("aria-expanded", "true");
  }
  function open() { input.focus(); input.select(); load(); }
  if (input) {
    input.addEventListener("focus", load);
    input.addEventListener("input", function () { load().then(function () { render(input.value); }); });
    input.addEventListener("keydown", function (e) {
      var links = box.querySelectorAll("a");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault(); if (!links.length) return;
        sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
        links.forEach(function (l, i) { l.classList.toggle("sel", i === sel); });
        links[sel].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" && links.length) {
        e.preventDefault(); (links[sel >= 0 ? sel : 0]).click();
      } else if (e.key === "Escape") { box.hidden = true; input.blur(); }
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".search-wrap")) box.hidden = true; });
  }
  document.addEventListener("keydown", function (e) {
    var tag = (document.activeElement && document.activeElement.tagName) || "";
    if (e.key === "/" && !/INPUT|TEXTAREA/.test(tag)) { e.preventDefault(); open(); }
  });
  var hs = $("#hero-search"); if (hs) hs.addEventListener("click", open);

  // on-page filter for long lists
  var prose = $(".prose");
  if (prose && !body.classList.contains("home") && !$("#explorer")) {
    var items = prose.querySelectorAll(".card, tbody tr, li");
    if (items.length > 14) {
      var f = document.createElement("div");
      f.className = "filter";
      f.innerHTML = '<input type="search" aria-label="Filter this page" placeholder="Filter this page…"><small></small>';
      var h1 = prose.querySelector("h1"), jump = prose.querySelector(".jump");
      var anchor = jump || h1;
      (anchor ? anchor.insertAdjacentElement("afterend", f) : prose.insertAdjacentElement("afterbegin", f));
      var fi = f.querySelector("input"), fs = f.querySelector("small");
      fi.addEventListener("input", function () {
        var q = fi.value.toLowerCase().trim(), shown = 0;
        items.forEach(function (li) {
          var hit = !q || li.textContent.toLowerCase().indexOf(q) >= 0;
          li.classList.toggle("hidden-by-filter", !hit); if (hit) shown++;
        });
        prose.querySelectorAll(":scope > h2, :scope > h3").forEach(function (h) {
          if (!q) { h.classList.remove("hidden-by-filter"); return; }
          var n = h.nextElementSibling, any = false;
          while (n && !/^H[123]$/.test(n.tagName)) {
            if (n.querySelector && n.querySelector(".card:not(.hidden-by-filter), li:not(.hidden-by-filter), tbody tr:not(.hidden-by-filter)")) any = true;
            n = n.nextElementSibling;
          }
          h.classList.toggle("hidden-by-filter", !any);
        });
        fs.textContent = q ? shown + " of " + items.length + " entries match" : "";
      });
    }
  }

  // explore-all page
  var ex = $("#explorer");
  if (ex) {
    var AREAS = { planetary: "Planetary", satellites: "Satellites", weather: "Space weather", ai: "AI & VLMs", general: "General" };
    var TYPES = { paper: "Papers", dataset: "Datasets", tool: "Tools", learning: "Learning", competition: "Competitions", report: "Reports", org: "Organizations" };
    var st = { q: "", area: "", type: "", src: "", sort: "rel", n: 40 };
    var params = new URLSearchParams(location.search);
    ["q", "area", "type", "src", "sort"].forEach(function (k) { if (params.get(k)) st[k] = params.get(k); });
    var qIn = $("#ex-q"), srcSel = $("#ex-src"), sortSel = $("#ex-sort"), list = $("#ex-list"), cnt = $("#ex-count"), more = $("#ex-more");
    var all = [];
    function fix(u) { return !u ? "" : (/^https?:/.test(u) ? u : prefix + u); }
    function matches(e, skip) {
      if (skip !== "area" && st.area && e.a !== st.area) return false;
      if (skip !== "type" && st.type && e.k !== st.type) return false;
      if (skip !== "src" && st.src && e.src !== st.src) return false;
      if (st.q) {
        var hay = (e.t + " " + e.d + " " + e.s + " " + e.p + " " + e.src).toLowerCase();
        var terms = st.q.toLowerCase().split(/\s+/).filter(Boolean);
        for (var i = 0; i < terms.length; i++) if (hay.indexOf(terms[i]) < 0) return false;
      }
      return true;
    }
    function chips(el, key, labels, skipKey) {
      var counts = {}; all.forEach(function (e) { if (matches(e, skipKey)) counts[e[key === "area" ? "a" : "k"]] = (counts[e[key === "area" ? "a" : "k"]] || 0) + 1; });
      var total = Object.keys(counts).reduce(function (a, k) { return a + counts[k]; }, 0);
      var h = '<button class="fchip" type="button" data-v="" aria-pressed="' + (st[key] === "") + '">All<i>' + total + "</i></button>";
      Object.keys(labels).forEach(function (k) {
        if (!counts[k] && st[key] !== k) return;
        h += '<button class="fchip" type="button" data-v="' + k + '" aria-pressed="' + (st[key] === k) + '">' + labels[k] + "<i>" + (counts[k] || 0) + "</i></button>";
      });
      el.innerHTML = h;
    }
    function relScore(e) {
      if (!st.q) return 0; var terms = st.q.toLowerCase().split(/\s+/).filter(Boolean), s = 0, t = e.t.toLowerCase();
      terms.forEach(function (x) { if (t.indexOf(x) >= 0) s += 3; if (t.indexOf(x) === 0) s += 2; }); return s;
    }
    function render() {
      chips($("#ex-area"), "area", AREAS, "area"); chips($("#ex-type"), "type", TYPES, "type");
      var res = all.filter(function (e) { return matches(e); });
      if (st.sort === "new") res.sort(function (a, b) { return (b.y || 0) - (a.y || 0); });
      else if (st.sort === "old") res.sort(function (a, b) { return (a.y || 9999) - (b.y || 9999); });
      else if (st.sort === "az") res.sort(function (a, b) { return a.t.localeCompare(b.t); });
      else if (st.q) res.sort(function (a, b) { return relScore(b) - relScore(a); });
      cnt.textContent = res.length + " of " + all.length + " resources";
      list.innerHTML = res.slice(0, st.n).map(function (e) {
        var u = fix(e.u) || (prefix + e.h), ext = /^https?:/.test(u);
        var c = (e.src ? '<span class="chip src">' + esc(e.src) + "</span>" : "") + (e.y ? '<span class="chip">' + e.y + "</span>" : "") +
          '<span class="chip">' + esc(TYPES[e.k] ? TYPES[e.k].replace(/s$/, "") : e.k) + "</span>" + (e.pdf ? '<span class="chip pdf">PDF in repo</span>' : "");
        return '<article class="card" data-area="' + e.a + '"><div class="card-top">' + c + '</div><h3 class="card-title"><a href="' + esc(u) + '"' +
          (ext ? ' target="_blank" rel="noopener"' : "") + ">" + esc(e.t) + (ext ? '<span class="ext" aria-hidden="true"></span>' : "") + "</a></h3>" +
          (e.d ? '<p class="card-desc">' + esc(e.d) + "</p>" : "") + '<div class="card-meta"><a href="' + esc(prefix + e.h) + '">' + esc(e.p) + " › " + esc(e.s) + "</a></div></article>";
      }).join("") || '<p class="muted">No resources match these filters.</p>';
      more.hidden = res.length <= st.n;
      var p = new URLSearchParams(); ["q", "area", "type", "src"].forEach(function (k) { if (st[k]) p.set(k, st[k]); }); if (st.sort !== "rel") p.set("sort", st.sort);
      try { history.replaceState(null, "", location.pathname + (p.toString() ? "?" + p : "")); } catch (e) {}
    }
    load().then(function (j) {
      all = j;
      var srcs = {}; all.forEach(function (e) { if (e.src) srcs[e.src] = (srcs[e.src] || 0) + 1; });
      Object.keys(srcs).sort(function (a, b) { return srcs[b] - srcs[a]; }).slice(0, 40).forEach(function (s) {
        var o = document.createElement("option"); o.value = s; o.textContent = s + " (" + srcs[s] + ")"; srcSel.appendChild(o);
      });
      qIn.value = st.q; srcSel.value = st.src; sortSel.value = st.sort; render();
    });
    qIn.addEventListener("input", function () { st.q = qIn.value; st.n = 40; render(); });
    srcSel.addEventListener("change", function () { st.src = srcSel.value; st.n = 40; render(); });
    sortSel.addEventListener("change", function () { st.sort = sortSel.value; render(); });
    ex.addEventListener("click", function (e) {
      var b = e.target.closest(".fchip"); if (!b) return;
      var group = b.parentNode.id === "ex-area" ? "area" : "type"; st[group] = b.getAttribute("data-v"); st.n = 40; render();
    });
    more.addEventListener("click", function () { st.n += 40; render(); });
  }

  // highlight current section in the TOC
  var tocLinks = document.querySelectorAll(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { tocLinks.forEach(function (a) { a.classList.remove("on"); }); var a = map[e.target.id]; if (a) a.classList.add("on"); }
      });
    }, { rootMargin: "-70px 0px -70% 0px" });
    Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }
})();
