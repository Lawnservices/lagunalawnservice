document.addEventListener("DOMContentLoaded", function () {
  const cavesa = document.getElementById("navbarr");

  document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 300) {
      cavesa.style.backgroundColor = "#015462";
    } else {
      cavesa.style.backgroundColor = "#003349";
    }
  });

  function mas() {
    document.getElementById("map").style.color = "green";
    document.getElementById("cipal").style.color = "#003349";
  }
  setInterval(mas, 9000);

  document.getElementById("foto1").addEventListener("click", function () {
    document.getElementById("foto1").style.display = "none";
    document.getElementById("foto2").style.display = "block";
  });

  document.getElementById("foto2").addEventListener("click", function () {
    document.getElementById("foto2").style.display = "none";
    document.getElementById("foto1").style.display = "block";
  });
});
