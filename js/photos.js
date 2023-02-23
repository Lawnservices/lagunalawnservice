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

function laguna() {
    document.getElementById('nombre').style.color = '#0366d6';
    document.getElementById('calor').style.color = '#04aa6b';
    document.getElementById('calor').innerHTML = 'Call now to make an estimate <br>240-883-8479';
    document.getElementById('zxcv').innerHTML = 'Subscribete to our Youtube channel';
}