const lagunes = document.getElementById('header');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#04aa6d';
        header.style.borderBottom = '3px solid #154256'
    } else {
        header.style.backgroundColor = ' #154256';
        header.style.borderBottom = '3px solid #04aa6d '

    }
});



const mexi = document.getElementById('colores');
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        colores.style.backgroundColor = '#154256';
    } else {
        colores.style.backgroundColor = '#04aa6d';

    }
})