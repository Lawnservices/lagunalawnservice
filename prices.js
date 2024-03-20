document.addEventListener("DOMContentLoaded", function () {
  const masa = document.getElementById("titulos");
  document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 200) {
       masa.style.display = "block";
       masa.innerHTML =
        "<h3>THE BEST PRICES IN THE AREA.</h3>";
    } else {
      masa.style.display = "none";
    }
  });
});

