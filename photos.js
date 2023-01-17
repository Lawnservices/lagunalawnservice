const lagunes = document.getElementById('header');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#0366b6';

    } else {
        header.style.backgroundColor = ' #04aa6b';

    }
});

function myFunction() {
    alert('This document is now being printed');
}