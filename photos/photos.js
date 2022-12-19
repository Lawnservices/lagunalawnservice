const laguna = document.getElementById('nav');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 260) {
        nav.style.backgroundColor = '#154';
    } else {
        nav.style.backgroundColor = '#04aa6b';

    }


});