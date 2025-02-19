document.addEventListener('DOMContentLoaded', function() {
    // Verifica si ya se ha dado una respuesta
    if (!localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookieConsent').style.display = 'block';
    }

    // Botón Aceptar
    document.getElementById('acceptCookies').addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true');
      document.getElementById('cookieConsent').style.display = 'none';
    });

    // Botón Rechazar
    document.getElementById('rejectCookies').addEventListener('click', function() {
      document.getElementById('cookieConsent').style.display = 'none';
    });
  });
