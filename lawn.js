document.getElementById("foto").addEventListener("click", function () {
  document.getElementById("foto").style.display = "none";
  document.getElementById("foto1").style.display = "block";
  document.getElementById("demo").innerText = "Lawn Mowing";
});
document.getElementById("foto1").addEventListener("click", function () {
  document.getElementById("foto1").style.display = "none";
  document.getElementById("foto2").style.display = "block";
  document.getElementById("demo").innerText = "Mulch Replacement";
  document.getElementById("demo").style.color = "red";
});
document.getElementById("foto2").addEventListener("click", function () {
  document.getElementById("foto2").style.display = "none";
  document.getElementById("foto3").style.display = "block";
  document.getElementById("demo").innerText = "Call Now (240)-883-8479";
  document.getElementById("demo").style.color = "#00b154";
  
});

document.getElementById("foto3").addEventListener("click",function(){
document.getElementById("foto3").style.display = "none";
document.getElementById("foto").style.display = "block";
});
document.getElementById("videos").addEventListener("click",function(){
     document.getElementById("videos").style.display = "none";
     document.getElementById("video").style.display = "block";
     document.getElementById("demo").innerText = "Subscribe to the Channel";
     document.getElementById("demo").style.color = "#003349";
     document.getElementById("laguna").style.color = "#00b154";
     document.getElementById("foto").style.display = "none";
     document.getElementById("foto1").style.display = "none";
     document.getElementById("foto2").style.display = "none";
     document.getElementById("foto3").style.display = "none";
     document.getElementById("videos1").style.display = "block";
  });
  document.getElementById("videos1").addEventListener("click",function(){
     document.getElementById("videos1").style.display = "none";
  document.getElementById("videos").style.display = "block";
  document.getElementById("video").style.display = "none";
   document.getElementById("foto").style.display = "block";
   document.getElementById("demo").innerText = "THE BEST PRICES IN THE AREA.";
    document.getElementById("demo").style.color = "#00b154";
     document.getElementById("laguna").style.color = "#003349";
  });
  

 

 
