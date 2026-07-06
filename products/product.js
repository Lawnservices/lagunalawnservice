const titulos = document.getElementsByClassName('titulo');

for (let titulo of titulos){
    titulo.style.color = '#144297';
}

const tuto = document.createElement('h1');

tuto.textContent = 'Call Now 240-883-8479';
tuto.style.textAlign = 'center';
tuto.style.color = '#061125';
document.getElementById('titulos').appendChild(tuto);