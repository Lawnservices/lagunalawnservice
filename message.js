function showMessage(message) {
    document.getElementById('message').textContent = message;
}

showMessage("Call For Services:\n");

function pagos(precio) {
    document.getElementById('precio').textContent = precio;
    document.getElementById('precio').style.fontSize = '2.1rem';
    document.getElementById('precio').style.color = '#0366d6';
}

pagos('Merry Christmas');