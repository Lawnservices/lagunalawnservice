// Función de inicialización del mapa
function initMap() {
  // Coordenadas del centro del mapa
  var myLatLng = {lat: 38.9582578, lng:-76.8605644}; 
 
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 12
  });

 
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: '¡Miguel Lawn Services!'
  });

  
}
