 const canviar = document.getElementById('header');
 const checar = document.getElementById('caja');
 const saluna = document.getElementById('laguna');




 document.addEventListener('scroll', () => {
     var scroll_position = window.scrollY;
     if (scroll_position > 300) {
         header.style.backgroundColor = '#60A5A5';

     } else {
         header.style.backgroundColor = 'aliceblue';
     }
 });

 document.addEventListener('scroll', () => {
     var scroll_positin = window.scrollY;
     if (scroll_positin > 480) {
         caja.style.backgroundColor = '#29323c'
     } else {
         caja.style.backgroundColor = 'white'
     }
 });
 document.addEventListener('scroll', () => {
     var scroll_positin = window.scrollY;
     if (scroll_positin > 480) {
         laguna.style.color = 'white'

     } else {
         laguna.style.color = 'black'
     }

 });