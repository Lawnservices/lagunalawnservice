"use strict"
setTimeout(function() {
    setColor();

}, 6000);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "#fff" ? "green" : "#B5D8F0";

}

function stoChangeColor() {
    clearInterval(temporazador);
}