document.addEventListener('DOMContentLoaded', function(){

 document.getElementById('orario').style.display = 'none'; 
 document.getElementById('mls').style.display = 'none';
 setTimeout(function(){
  document.getElementById('orario').style.display = 'block'; 
  },9000);
  setTimeout(function(){
    document.getElementById('mls').style.display = 'block';
  },6000);

const muestra = document.querySelectorAll('.cta');
 muestra.forEach((elemento, index) => {
  setTimeout(function(){
  elemento.style.color = '#006241';
  elemento.style.backgroundColor = '#ADD8E6';
  },3000 * (index + 1));
   
  }); 
 
});