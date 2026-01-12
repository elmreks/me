(async function () {
  const mount = document.getElementById("site-nav");
  if (!mount) return;

  try {
    const res = await fetch("./assets/nav.html", { cache: "no-cache" });
    mount.innerHTML = await res.text();

    const path = (location.pathname || "").toLowerCase();
    const current = path.endsWith("/ideas.html") ? "ideas" : "index";

    mount.querySelectorAll("a[data-nav]").forEach(a => {
      if (a.getAttribute("data-nav") === current) a.setAttribute("aria-current", "page");
    });

    if (typeof window.bindThemeToggle === "function") window.bindThemeToggle();
  } catch (e) {
    console.error("nav load failed:", e);
  }
})();