const laguna = document.getElementById('foto');


document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 200) {
        foto.style.backgroundColor = "#154";

    } else {
        foto.style.backgroundColor = "#0366b6";
        foto.style.height = "220px";

    }
});