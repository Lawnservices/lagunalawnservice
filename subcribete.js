const btn = document.getElementById("subscribeBtn");

    
    const lang = navigator.language || navigator.userLanguage;

    
    if (lang.startsWith("en")) {
        btn.textContent = "Subscribe to my channel";
    } else {
        btn.textContent = "Suscríbete a mi canal";
    }

   
    btn.onclick = () => {
        window.open("https://www.youtube.com/channel/UC8Q51GWY9f5YsIQyLwNMfbw?sub_confirmation=1", "_blank");
    };