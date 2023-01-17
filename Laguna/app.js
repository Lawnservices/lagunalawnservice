const laguna = document.getElementById('abajo');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 300) {
        abajo.style.backgroundColor = '#04aa6b';
    } else {
        abajo.style.backgroundColor = 'rgb(123, 157, 145)';
    }
});

function laguna() {
    alert('This document is now being printed');
}

function lame() {
    document.getElementById('mensage').innerHTML = 'please call for good services';
}