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
};
document.getElementById("seis").addEventListener("click", function () {
  document.getElementById("seis").style.color = "yellow";
  document.getElementById("mensajes").style.display = "block";
});
setInterval(tiempo, 20000);

function mas() {
  document.getElementById("seis").style.color = "#fff";
  document.getElementById("mensajes").style.display = "none";
};
setInterval(mas, 30000);
