const lagunes = document.getElementById('header');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 200) {
        header.style.backgroundColor = 'aliceblue';
    }
});