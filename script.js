window.addEventListener("load", function () {});
document.getElementById("dos").addEventListener("click", function () {
  document.getElementById("dos").style.color = "green";
  document.getElementById("orario").style.color = "green";
  document.getElementById("mensage").style.display = "block";
});
function tiempo() {
  document.getElementById("dos").style.color = "#fff";
  document.getElementById("orario").style.color = "#003349";
  document.getElementById("mensage").style.display = "none";
}
document.getElementById("seis").addEventListener("click", function () {
  document.getElementById("seis").style.color = "yellow";
  document.getElementById("mensajes").style.display = "block";
});
setInterval(tiempo, 8000);

function mas() {
  document.getElementById("seis").style.color = "#fff";
  document.getElementById("mensajes").style.display = "none";
}
setInterval(mas, 9000);

document.getElementById("tube").addEventListener("click", function () {
  let paginas;
  if (confirm("Subscribe to the channel thanks.")) {
    window.location.assign(
      "https://www.youtube.com/watch?v=JWaalpVgbtU&list=PLBuaTHsUXhWnHvzCQIJky3J_RLgm8bBlB"
    );
  } else {
    paginas = "Gracias";
  }
});
