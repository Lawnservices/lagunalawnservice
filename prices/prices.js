document.addEventListener("DOMContentLoaded", function () {
  const masa = document.getElementById("titulos");
  document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 800) {
      masa.style.display = "block";
      masa.innerHTML =
        "<h3>THE BEST PRICES IN THE AREA.</h3>";
    } else {
      masa.style.backgroundColor = "#061125";
    }
  });

  let hora = new Date().getHours();

  let put = 'At Miguel Lawn Services, we provide professional lawn mowing at affordable prices to keep your yard clean, green, and well maintained. We take pride in being reliable, punctual, and detail-oriented on every job';
  let t = 'service at affordable prices. We proudly serve residential and commercial properties, ensuring every lawn looks neat and well maintained';
  let ta = 'We open tomorrow at 7:00 AM';
  if (hora < 12) {
    document.getElementById('put').textContent = put;
  } else if (hora < 18) {
    document.getElementById('put').textContent = put;

  } else {
    document.getElementById('put').textContent = ta;

  }



});

