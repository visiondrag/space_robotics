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
  if (prose && !body.classList.contains("home")) {
    var items = prose.querySelectorAll("li, tbody tr");
    if (items.length > 18) {
      var f = document.createElement("div");
      f.className = "filter";
      f.innerHTML = '<input type="search" aria-label="Filter this page" placeholder="Filter this page…"><small></small>';
      var h1 = prose.querySelector("h1");
      (h1 ? h1.insertAdjacentElement("afterend", f) : prose.insertAdjacentElement("afterbegin", f));
      var fi = f.querySelector("input"), fs = f.querySelector("small");
      fi.addEventListener("input", function () {
        var q = fi.value.toLowerCase().trim(), shown = 0;
        items.forEach(function (li) {
          var hit = !q || li.textContent.toLowerCase().indexOf(q) >= 0;
          li.classList.toggle("hidden-by-filter", !hit); if (hit) shown++;
        });
        prose.querySelectorAll("h2, h3").forEach(function (h) {
          if (!q) { h.classList.remove("hidden-by-filter"); return; }
          var n = h.nextElementSibling, any = false;
          while (n && !/^H[123]$/.test(n.tagName)) {
            if (n.querySelector && n.querySelector("li:not(.hidden-by-filter), tbody tr:not(.hidden-by-filter)")) any = true;
            n = n.nextElementSibling;
          }
          h.classList.toggle("hidden-by-filter", !any);
        });
        fs.textContent = q ? shown + " of " + items.length + " entries match" : "";
      });
    }
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
