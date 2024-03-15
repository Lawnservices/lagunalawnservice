const masa = document.getElementById('titulos');
const precio = document.addEventListener('scroll', ()=>{
var  scroll_position = window.scrollY;
if(scroll_position > 200){
document.getElementById('titulos').style.display = 'block';
document.getElementById('titulos').innerHTML = '<h3>THE BEST PRICES IN THE AREA.</h3>';
} else{
  document.getElementById('titulos').style.display = 'none';
   
}
});