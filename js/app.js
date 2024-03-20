document.addEventListener("DOMContentLoaded", function(){
const cavesa = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");
cavesa.addEventListener("click", () => {
  cavesa.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    cavesa.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

document.getElementById("dos");

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 300) {
    header.style.backgroundColor = "#0366b6";
    header.style.borderTop = "6px solid #34495e";
    header.style.height = "80px";
    dos.style.backgroundColor = "#0366b6";
    if (scroll_position > 2000) {
      tres.style.color = "green";
      cuatro.style.color = "#fff";
    }
    if(scroll_position < 2000){
         tres.style.color = "#fff";
    }
     if(scroll_position > 4340){
     tres.style.color = "#fff";
     cuatro.style.color = "green";
     cinco.style.color = "#fff";
     }
     if(scroll_position > 5300){
        cuatro.style.color = "#fff";
        cinco.style.color = "green";
         
     }
     if(scroll_position > 6200){
         cinco.style.color = "#fff";
        
     }
    if (scroll) {
      header.style.height = "90px";
    }
  } else {
    header.style.backgroundColor = "#34495e";
    header.style.borderTop = "6px solid #04aa6d";
    header.style.height = "90px";
    dos.style.backgroundColor = "#003349";
    tres.style.color = "#fff";
  }
});

});


 