window.addEventListener("load", function () {
  const dos = document.getElementById("dos");
  const orario = document.getElementById("orario");
  const mensage = document.getElementById("mensage");
  const seis = document.getElementById("seis");
  const mensajes = document.getElementById("mensajes");
  const tube = document.getElementById("tube");

  if (dos && orario && mensage) {
    dos.addEventListener("click", function () {
      dos.style.color = "green";
      orario.style.color = "green";
      mensage.style.display = "block";
    });

    function tiempo() {
      dos.style.color = "#fff";
      orario.style.color = "#003349";
      mensage.style.display = "none";
    }
    setInterval(tiempo, 8000); // Ejecuta cada 8 segundos

    function mas() {
      seis.style.color = "#fff";
      mensajes.style.display = "none";
    }
    setInterval(mas, 9000); // Ejecuta cada 9 segundos
  }

  if (seis && mensajes) {
    seis.addEventListener("click", function () {
      seis.style.color = "yellow";
      mensajes.style.display = "block";
    });
  }

  if (tube) {
    tube.addEventListener("click", function () {
      if (confirm("Subscribe to the channel thanks.")) {
        window.location.assign(
          "https://www.youtube.com/watch?v=JWaalpVgbtU&list=PLBuaTHsUXhWnHvzCQIJky3J_RLgm8bBlB"
        );
      } else {
        alert("Gracias");
      }
    });
  }
});
