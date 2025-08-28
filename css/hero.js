document.addEventListener('DOMContentLoaded', () => {
let dia = new Date().getHours();
let lawn = ['Good Lawn Mowing', 'Good Mulch Replacement.', 'Good Planting Flowers.'];


if (dia < 12){
    document.getElementById('hero').style.backgroundImage = 'url("https://lagunalawnservice.com/img/galeria11.jpg")';
    document.getElementById('hero').style.backgroundSize = 'cover';
    document.getElementById('hero').style.backgroundRepeat = 'no-repeat';
    document.getElementById('servicio').textContent =  lawn[0];
     
    
} else if (dia < 18){
    document.getElementById('hero').style.backgroundImage = 'url("https://lagunalawnservice.com/img/galeria8.jpg")';
     document.getElementById('hero').style.backgroundSize = 'cover';
    document.getElementById('hero').style.backgroundRepeat = 'no-repeat';
    document.getElementById('servicio').textContent =  lawn[1];
   

} else {
    document.getElementById('hero').style.backgroundImage = 'url("https://lagunalawnservice.com/img/galeria9.jpg")';
     document.getElementById('hero').style.backgroundSize = 'cover';
    document.getElementById('hero').style.backgroundRepeat = 'no-repeat';
    document.getElementById('servicio').textContent =  lawn[2];

}


});