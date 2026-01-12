(async function(){
  const mount = document.getElementById("site-nav");
  if (!mount) return;
  const res = await fetch("./assets/nav.html");
  mount.innerHTML = await res.text();
})();