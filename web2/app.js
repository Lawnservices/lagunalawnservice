const laguna = document.getElementById('colores');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 160) {
        colores.style.backgroundColor = '#04AA6D'
    } else {
        colores.style.backgroundColor = '#60a5a5'
    }

});