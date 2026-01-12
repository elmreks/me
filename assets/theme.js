(function(){
  const KEY = "theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(KEY) || "light";
  root.dataset.theme = saved;
  window.addEventListener("click", e => {
    if (e.target.id === "themeToggle") {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      localStorage.setItem(KEY, next);
    }
  });
})();