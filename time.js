function timesaludo(){
const  hour = new Date().getHours();
let greeting;
const mensaje = 'time to put down new mulch.';
if(hour < 12 ){
    greeting = 'Good morning';
} else if(hour < 18) {
    greeting = 'Good day';
} else{
    greeting = 'Good evening';
}
document.getElementById('time').innerHTML = greeting + ' ' + mensaje;
document.getElementById('time').style.color = 'blue';
}
setTimeout(() =>{
    timesaludo();
},6000); 

let corte = "Lawn Mowing Call Now 240 883 8479"
let day;
switch (new Date().getDay()){
    case 0:
    day = "Sunday";
    break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thurday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
                               
}
setTimeout(()=>{
    document.getElementById('dias').innerHTML = "Today is" +" "+ day +" "+ corte;
    document.getElementById('dias').style.color = "green";
},9000);
 