const laguna = document.getElementById('abajo');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 300) {
        abajo.style.backgroundColor = '#04aa6b';
    } else {
        abajo.style.backgroundColor = 'rgb(123, 157, 145)';
    }
})