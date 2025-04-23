function timesaludo(){
const  hour = new Date().getHours();
let greeting;
const mensaje = 'time to put down new mulch.';
if(hour < 12 ){
    greeting = 'Good morning' +' '+ mensaje;
} else if(hour < 18) {
    greeting = 'Good day' +' '+ mensaje;
} else{
    greeting = 'Good evening' +' '+ mensaje;
}
document.getElementById('time').innerHTML = greeting;
}
setTimeout(() =>{
    timesaludo();
},6000); 
 