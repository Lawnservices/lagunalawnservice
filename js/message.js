function showMessage(message) {
    document.getElementById('message').textContent = message;
    document.getElementById('message').style.color = '#04aa6b';
}

showMessage("Call For Services:\n");

function pagos(precio) {
    document.getElementById('precio').textContent = precio;
    document.getElementById('precio').style.fontSize = '2.1rem';
    document.getElementById('precio').style.color = '#299684';
}

pagos('Time to replace the old mulch call us for the special');


// 0000
// if('geolocation' in navigator){

// } else{}
// navigator.geolocation.getCurrentPosition(function(position){
// var latitude = position.latitude;
// var longitude = position.coords.longitude;
// }), function(error){

// };