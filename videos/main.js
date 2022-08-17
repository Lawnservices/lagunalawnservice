const lagunes = document.getElementById('colores');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 200) {
        colores.style.backgroundColor = 'aliceblue';
    }
});