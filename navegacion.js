document.addEventListener("DOMContentLoaded", function () {
  const navegac = document.getElementById("nav");
  const navegacion = document.getElementById("nave");
  const navegacio = document.getElementById("naves");

  const enla = document.createElement("a");
  const enlace = document.createElement("a");
  const enlac = document.createElement("a");
  
  enla.href = "https://lagunalawnservice.com";
  enla.textContent='Home';

  enlace.href = "https://lagunalawnservice.com/photos";
  enlace.textContent='Photos';

  enlac.href = "https://lagunalawnservice.com/prices";
  enlac.textContent='Prices';
  
  navegac.appendChild(enla);
  navegacion.appendChild(enlace);
  navegacio.appendChild(enlac);
});
