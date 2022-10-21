const laguna = document.getElementById('mnb');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position = 200) {
        mnb.style.backgroundColor = '#04aa6b';
    } else {
        mnb.style.backgroundColor = '#154';
    }
});