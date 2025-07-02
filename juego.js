const nombre = localStorage.getItem("nombreUsuario");
const spanNombre = document.getElementById("nombreInsertado");

if (nombre) {
  spanNombre.textContent = ` ${nombre}`;
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function openPopup(option) {
  document.getElementById("popup").style.display = "flex";
  resetIframes();
  if (option === 1) {
    document.getElementById("iframe1").style.display = "block";
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  resetIframes();
}

function resetIframes() {
  const iframes = document.querySelectorAll(".iframe-popup");
  iframes.forEach((iframe) => {
    iframe.style.display = "none";
  });
}
