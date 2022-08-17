const lagunes = document.getElementById('colores');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        colores.style.backgroundColor = '#0088a9';
    }
});