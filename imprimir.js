document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("imprima").addEventListener("click", function () {
    document.getElementById("imprima").style.display = "none";
    document.getElementById("mulch").style.display = "none";
    document.getElementById("casa").style.display = "block";
    document.getElementById("casa").style.color = "transparent";
    document.getElementById("antes").style.display = "block";
    document.getElementById("antes").style.color = "transparent";
    window.print();
  });

  document.getElementById("casa").addEventListener("click", function () {
    window.location.assign("https://lagunalawnservice.com/");
  });

  function tiempo() {
    document.getElementById("casa").style.color = "green";
    document.getElementById("antes").style.color = "#124567";
  }
  setInterval(tiempo, 9000);
});
