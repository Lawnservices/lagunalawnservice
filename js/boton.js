"use strict"
setTimeout(function() {
    setColor();

}, 6000);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "#fff" ? "green" : "rgba(156,240,164,0.2)";

}

function stoChangeColor() {
    clearInterval(temporazador);
}