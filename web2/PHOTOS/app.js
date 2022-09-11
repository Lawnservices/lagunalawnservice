const lagunes = document.getElementById('header');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = 'green';
    } else {
        header.style.backgroundColor = ' #154256';
    }
});