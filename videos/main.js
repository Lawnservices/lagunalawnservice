const laguna = document.getElementById('colores');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        colores.style.backgroundColor = '#04aa6d';
    } else {
        colores.style.backgroundColor = '#34495e';
    }
})