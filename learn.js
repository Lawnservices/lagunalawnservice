document.addEventListener('DOMContentLoaded', function(){
 function mas(){
  document.getElementById('the').style.color = 'green';
  document.getElementById('lawn').style.color = '#036670';
}
 setTimeout(mas,6000)

const numero = document.getElementById('numero');
const texto  = document.createElement('a');

 numero.href='tel:2408838479';
 texto.textContent='Call Now: 240-883-8479';

 numero.appendChild(texto);

  

});