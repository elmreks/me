(function () {
  const KEY = "cg-theme"; // "light" | "dark"
  const DEFAULT = "light";

  function getTheme() {
    const v = localStorage.getItem(KEY);
    return (v === "light" || v === "dark") ? v : DEFAULT;
  }

  function setTheme(v) {
    document.documentElement.setAttribute("data-theme", v);
    localStorage.setItem(KEY, v);
  }

  // Apply immediately
  document.documentElement.setAttribute("data-theme", getTheme());

  window.bindThemeToggle = function () {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const cur = getTheme();
      const nxt = (cur === "light") ? "dark" : "light";
      setTheme(nxt);
    });
  };
})();