document.addEventListener('DOMContentLoaded', () => {
   let semana = new Date();
   let dias = ['Sunday,','Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,'];
   document.getElementById('dia').textContent = dias[semana.getDay()];
    


    function tiempo(){
        let horas = new Date();
        let hora = horas.getHours();
        let minutos = horas.getMinutes();
        let segundos = horas.getSeconds();
        const ampm = hora >= 12 ? "PM" : "AM";
        
        hora = hora % 12 || 12;

        minutos = minutos.toString().padStart(2, '0');
        segundos =segundos.toString().padStart(2, '0');

        document.getElementById('tiempo').textContent = `${hora}:${minutos}:${segundos} ${ampm}`;  
              

    }
    tiempo();
    setInterval(tiempo, 1000);
});