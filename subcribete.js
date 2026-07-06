const btn = document.getElementById("subscribeBtn");

if (btn) {
    const lang = navigator.language || navigator.userLanguage;

    btn.textContent = lang.startsWith("en")
        ? "Subscribe"
        : "Suscríbete";
}