const  currentUrl = window.location.pathname;
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
if (link.getAttribute('href') === currentUrl) {
    link.classList.add('active');
}
});