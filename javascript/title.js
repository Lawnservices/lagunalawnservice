const laguna = document.getElementById('foto');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        foto.style.backgroundColor = "#154";
    } else {
        foto.style.backgroundColor = "#0366b6";
    }
});