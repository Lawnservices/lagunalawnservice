const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 350) {
        header.style.backgroundColor = '#04aa6d';
        header.style.borderTop = '6px solid #34495e';
        header.style.height = '80px';
        if (scroll) {
            header.style.height = '100px';


        }
    } else {
        header.style.backgroundColor = '#34495e';
        header.style.borderTop = '6px solid #04aa6d';
        header.style.height = '80px';
    }

});

function lagunas() {
    document.getElementById('blanco').style.color = '#fff';
    document.getElementById('foto2').style.display = 'block';
    document.getElementById('mls').style.display = 'none';


}

function laguna() {
    document.getElementById('blanco').style.color = 'blue';
    document.getElementById('blancoo').style.color = '#fff';
    document.getElementById('mls').style.display = 'block';
    document.getElementById('foto2').style.display = 'none';

}
 
 