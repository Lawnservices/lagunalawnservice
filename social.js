const cavesa = document.getElementById('navbar');

document.addEventListener('scroll',() =>{
var scroll_position = window.scrollY;
if( scroll_position > 260){
  cavesa.style.backgroundColor = '#003349';
} else{
  cavesa.style.backgroundColor = '#06aab6';
}
});