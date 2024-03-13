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