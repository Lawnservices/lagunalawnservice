"use strict"
setTimeout(function() {
    setColor();

}, 6000);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "#fff" ? "green" : "#B5D8F0";
    var pares = document.querySelector('.cta');
    pares.style.backgroundColor = pares.style.backgroundColor = "#f6f6f6";
    pares.style.color = pares.style.color = "#04aab6";


}

function stoChangeColor() {
    clearInterval(temporazador);
}