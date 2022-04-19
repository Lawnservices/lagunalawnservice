const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
});

window.onscroll = function() { myFunction() };

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classlist.add("sticky");
    }
}


function out(obj) {
    obj.innerHTML = " we will create green places to enjoy with your family"
    var a = document.getElementById("verde").style.color = "#fff";
}

function over(obj) {
    obj.innerHTML = "WE HAVE THE BEST PRICES IN THE MARKET MAKE A FREE ESTIMATE"
    var a = document.getElementById("verde").style.color = "green";
}
(function() {
    setInterval(function() {
        var letras = document.getElementById("laguna"),
            colores = ["white", "green"];
        letras.style.color = colores[Math.floor(Math.random() * colores.length)];

    }, 1000);
}())