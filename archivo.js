 
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Muestra tu propio botón o banner de instalación aquí
    // Puedes personalizar el diseño y el contenido según tus necesidades
    // Por ejemplo, podrías mostrar un botón en la barra de navegación
    showInstallPrompt();
  });

  function showInstallPrompt() {
    // Muestra tu propio botón o banner de instalación
    // Puedes personalizar el diseño y el contenido según tus necesidades
    const installButton = document.getElementById('install-button');

    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
      // Pide al usuario que instale la aplicación
      deferredPrompt.prompt();

      // Espera a que el usuario responda a la solicitud de instalación
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('El usuario aceptó instalar la aplicación');
          } else {
            console.log('El usuario rechazó instalar la aplicación');
          }

          // Limpiar la referencia al prompt después de la instalación o el rechazo
          deferredPrompt = null;
          installButton.style.display = 'none';
        });
    });
  }
 
