document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// mensajes

let mensaje = document.getElementById('mensajes');

let tiempo = new Date().getHours();

if (tiempo < 12){
  mensaje.textContent = 'Is your grass overgrown? Call us and we’ll make it look perfect. Fast, reliable, and affordable service.';
} else if (tiempo < 18){
  mensaje.textContent = 'The time has come for your mulch replacement. Refresh your yard and give it a clean, polished look—call us today.';
} else{
  mensaje.textContent = 'We are currently closed. Our business hours resume tomorrow at 7:00 AM.';
}

});