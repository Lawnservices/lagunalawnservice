document.addEventListener("DOMContentLoaded", function () {
  const navegac = document.getElementById("nav");
   
  const navegacio = document.getElementById("naves");

  const enla = document.createElement("a");
   
  const enlac = document.createElement("a");
  
  enla.href = "https://lagunalawnservice.com";
  enla.textContent='Home';

   

  enlac.href = "https://lagunalawnservice.com/prices";
  enlac.textContent='Prices';
  
  navegac.appendChild(enla);
   
  navegacio.appendChild(enlac);
});
