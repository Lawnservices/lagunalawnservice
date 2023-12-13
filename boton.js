let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    
    showInstallPrompt();
  });

  function showInstallPrompt() {
    
    const installButton = document.getElementById('install-button');

    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
       
      deferredPrompt.prompt();

      
      deferredPrompt.userChoice
        .then((choiceResult) => {
           if (choiceResult.outcome === 'accepted') {
            console.log('');
          } else {
            console.log('');
          }


           
          deferredPrompt = null;
          installButton.style.display = 'none';
        });
    });
  }
 
