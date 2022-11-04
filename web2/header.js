const laguna = document.getElementById('mnb');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 160) {
        mnb.style.backgroundColor = '#04aa6d';

    } else {
        mnb.style.backgroundColor = '#34495e';

    }
});