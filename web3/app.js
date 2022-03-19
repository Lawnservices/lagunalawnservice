const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}



(function() {
    setInterval(function() {
        var canbio = document.getElementById("logo");
        primera = ['teal', "white"];

        canbio.style.color = primera[Math.floor(Math.random() * primera.length)];
    }, 1000);
}())
(function() {
    setInterval(function() {
        var canbio = document.getElementById("verde");
        primera = ['green', "white"];

        canbio.style.color = primera[Math.floor(Math.random() * primera.length)];
    }, 1000);
}())