const vesa = document.getElementById("navega");
const vesas = document.getElementById("vermas");
const cavesa = document.addEventListener("scroll", () =>{
var scroll_positin = window.scrollY;
if(scroll_positin > 300){
navega.style.backgroundColor = "#003349";
vermas.style.color = "#fff";
} else{
  navega.style.backgroundColor = "#299684";
  vermas.style.color = "#333";
}
});

document.getElementById("bisnes").addEventListener("click",function(){
  document.getElementById("bisnes").style.display = "none";
  document.getElementById("domingo").style.display = "block";
  document.getElementById("bisnes1").style.display = "block";
});

document.getElementById("bisnes1").addEventListener("click",function(){
  document.getElementById("bisnes1").style.display = "none";
  document.getElementById("bisnes").style.display = "block";
   document.getElementById("domingo").style.display = "none";
});