document.addEventListener("DOMContentLoaded", function () {
  const myPromise = new Promise(function (myResolve) {
    setTimeout(function () {
      myResolve("What can we do for your garden? If you want an excellent garden, you are in the right place.");
    }, 3000);
  });

  myPromise.then(function (value) {
    document.getElementById("place").innerHTML = value;
    document.getElementById("place").style.backgroundColor = "#1548";
  });
});
