document.addEventListener('DOMContentLoaded', () => {
let dia = new Date().getHours();
let lawn = ['Good Lawn Mowing', 'Good Mulch Replacement.', 'Good Planting Flowers.'];

document.getElementById('hero').style.backgroundSize = 'cover';
document.getElementById('hero').style.backgroundRepeat = 'no-repeat';
if (dia < 12){
    document.getElementById('hero').style.backgroundImage = 'url("https://lagunalawnservice.com/img/galeria11.jpg")';
    document.getElementById('servicio').textContent =  lawn[0];
     
    
} else if (dia < 18){
    document.getElementById('hero').style.backgroundImage = 'url("https://lagunalawnservice.com/img/galeria8.jpg")';
    document.getElementById('servicio').textContent =  lawn[1];
   

} else {
    document.getElementById('hero').style.backgroundImage = 'url("https://lagunalawnservice.com/img/galeria9.jpg")';
    document.getElementById('servicio').textContent =  lawn[2];

}

let zxc = new Date().getHours();
let colores = (zxc < 12) ? " #29323c" : " #1d518dff";
document.getElementById('bar').style.backgroundColor = colores;

let zxcc = new Date().getHours();
let coloress = (zxcc < 12) ? " #29323c" : " #1d518dff";
document.getElementById('asd').style.backgroundColor = coloress;

});