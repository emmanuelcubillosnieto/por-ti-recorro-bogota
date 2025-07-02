function openPopup(option) {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
  popup.className = "popup"; // Resetear clases anteriores
  resetIframes(); // Resetea los iframes
  if (option === 1) {
    popup.classList.add("popup-music");
    document.getElementById("iframe1").style.display = "block";
  } else if (option === 2) {
    popup.classList.add("popup-map");
    document.getElementById("iframe2").style.display = "block";
  } else if (option === 3) {
    popup.classList.add("popup-camera");
    window.open("camara.html", "_blank"); // La cámara se abre en nueva ventana
    closePopup(); // Cerrar el popup principal
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("popup").className = "popup"; // Resetear clases al cerrar
  resetIframes(); // Resetea los iframes
}

function resetIframes() {
  const iframes = document.querySelectorAll(".iframe-popup");
  iframes.forEach((iframe) => {
    iframe.style.display = "none";
  });
}
