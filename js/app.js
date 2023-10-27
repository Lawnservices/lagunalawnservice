const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

const ver = document.getElementById('verde');

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
        header.style.backgroundColor = '#0366b6';
        header.style.borderTop = '6px solid #34495e';
        header.style.height = '80px';
          
        
        if (scroll) {
            header.style.height = '80px';
       }
    } else {
        header.style.backgroundColor = '#34495e';
        header.style.borderTop = '6px solid #04aa6d';
        header.style.height = '80px';
    }
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 600){

   header.style.borderBottom= '4px solid #ed8080';
   verde.style.display = 'none';
    } else{
          header.style.borderBottom= 'none';
          verde.style.display = 'none';
    }


});


function llamar(){
document.getElementById('llamar').innerHTML="240-883-84798";
document.getElementById('llamar').style.color="#fff"
}
 
 