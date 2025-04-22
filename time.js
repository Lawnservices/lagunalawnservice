function timesaludo(){
const  hour = new Date().getHours();
let greeting;

if(hour < 12 ){
    greeting = 'Good morning';
} else if(hour < 18) {
    greeting = 'Good day';
} else{
    greeting = 'Good evening';
}
document.getElementById('time').innerHTML = greeting;
}
setTimeout(() =>{
    timesaludo();
},6000); 
 