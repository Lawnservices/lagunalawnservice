  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

     
    showInstallPrompt();
  });

  function showInstallPrompt() {
    
    const installBanner = document.getElementById('install-banner');

    installBanner.style.display = 'block';

    installBanner.addEventListener('click', () => {
       
      deferredPrompt.prompt();

       
      deferredPrompt.userChoice
        .then((choiceResult) => {
           

          
          deferredPrompt = null;
          installBanner.style.display = 'none';
        });
    });
  }
 
