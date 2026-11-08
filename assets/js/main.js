/* =========================================================
   Academia Itapetinguense de Letras
   Interações da interface
   ========================================================= */
(function () {
  "use strict";

  var body = document.body;
  var header = document.getElementById("site-header");
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");

  /* ---------- Header ao rolar ---------- */
  function onScroll() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Âncoras internas ----------
     O scroll suave nativo pode não iniciar quando a página está em segundo
     plano (por exemplo, em painéis de pré-visualização). Se, depois de um
     instante, a página não se moveu, saltamos direto para o destino. */
  function anchorTarget(hash) {
    if (!hash || hash === "#") return null;
    var id;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch (error) {
      id = hash.slice(1);
    }
    return document.getElementById(id);
  }

  function ensureAnchorScroll(hash) {
    var target = anchorTarget(hash);
    if (!target) return;

    var startY = window.scrollY;
    window.setTimeout(function () {
      var margin = parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
      var offset = margin || (header ? header.offsetHeight + 18 : 0);
      var delta = target.getBoundingClientRect().top - offset;

      if (Math.abs(delta) > 8 && Math.abs(window.scrollY - startY) < 6) {
        /* Força o salto instantâneo: o scroll suave nativo não avança
           quando a aba não está em primeiro plano. */
        var root = document.documentElement;
        var previous = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        window.scrollTo(0, window.scrollY + delta);
        root.style.scrollBehavior = previous;
      }
    }, 260);
  }

  window.addEventListener("hashchange", function () {
    ensureAnchorScroll(window.location.hash);
  });

  if (window.location.hash) {
    ensureAnchorScroll(window.location.hash);
  }

  /* ---------- Menu mobile ---------- */
  if (toggle && nav) {
    var setMenu = function (open) {
      body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    };

    toggle.addEventListener("click", function () {
      setMenu(!body.classList.contains("menu-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  /* ---------- Revelação ao rolar ---------- */
  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealItems.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  /* ---------- Abas de acadêmicos ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-tab]"));
  if (tabs.length) {
    var activate = function (key, updateHash) {
      tabs.forEach(function (tab) {
        var active = tab.dataset.tab === key;
        var panelId = tab.getAttribute("aria-controls");
        var panel = panelId ? document.getElementById(panelId) : null;

        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;

        if (panel) panel.classList.toggle("is-active", active);
      });

      if (updateHash !== false) {
        history.replaceState(null, "", "#" + key);
      }
    };

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        activate(tab.dataset.tab);
      });

      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        var index = tabs.indexOf(tab);
        var offset = event.key === "ArrowRight" ? 1 : -1;
        var next = tabs[(index + offset + tabs.length) % tabs.length];
        next.focus();
        activate(next.dataset.tab);
      });
    });

    var fromHash = function () {
      var key = window.location.hash.replace("#", "");
      return tabs.some(function (tab) {
        return tab.dataset.tab === key;
      })
        ? key
        : null;
    };

    var initial = fromHash();
    if (!initial) {
      var activeTab = tabs.filter(function (tab) {
        return tab.classList.contains("is-active");
      })[0];
      initial = activeTab ? activeTab.dataset.tab : tabs[0].dataset.tab;
    }
    activate(initial, false);

    window.addEventListener("hashchange", function () {
      var key = fromHash();
      if (key) activate(key, false);
    });
  }

  /* ---------- Carrossel de acadêmicos ---------- */
  var track = document.querySelector("[data-voices-track]");
  var prev = document.querySelector("[data-voices-prev]");
  var next = document.querySelector("[data-voices-next]");

  if (track && prev && next) {
    var step = function () {
      var card = track.querySelector(".voice-card");
      return card ? card.getBoundingClientRect().width + 16 : 280;
    };

    prev.addEventListener("click", function () {
      track.scrollBy({ left: -step() * 2, behavior: "smooth" });
    });

    next.addEventListener("click", function () {
      track.scrollBy({ left: step() * 2, behavior: "smooth" });
    });
  }

  /* ---------- Ano atual ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Formulário demonstrativo ---------- */
  var form = document.querySelector("[data-demo-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var success = form.querySelector("[data-form-success]");
      if (success) {
        success.classList.add("is-visible");
        success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      form.reset();
    });
  }
})();
