const routes = {
  "/": "/pages/home.html",
  "/servicos": "/pages/servicos.html",
  "/contato": "/pages/contato.html",
};

async function navigate(path) {
  const file = routes[path] || routes["/"];
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById("app").innerHTML = html;
}

document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (!link) return;
  e.preventDefault();
  history.pushState(null, null, link.getAttribute("href"));
  navigate(window.location.pathname);
});

window.addEventListener("popstate", () => navigate(window.location.pathname));

navigate(window.location.pathname);