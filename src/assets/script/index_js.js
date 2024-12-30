function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "1em 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "3em 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function navResponsive() {
  var x = document.getElementById("navbar");
  var y = document.getElementById("dropdown");
  if (x.className === "topnav") {
      x.className += " responsive";
      y.style.display = "block";
  } else {
      x.className = "topnav";
      y.style.display = "none";
  }
}

function closeNav(){
  var navClose = document.getElementById("dropdown");
  var x = document.getElementById("navbar");
  navClose.style.display="none !important";
  x.className = "topnav";
}

document.addEventListener("DOMContentLoaded", function() {
  var header = document.getElementById("navbar-right");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      setActivePage(this);
    });
  }
});

function setActivePage(element){
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
  element.className += " active";
}

function setActivePageMobile(){

  setActivePage();
  closeNav();
}

function changeImageOnHover(x){
  if(x == "hv1"){
    document.getElementById("hoverImg1").style.display = "block";
    document.getElementById("grid2left").style.display = "none";
  }
  if(x == "hv2"){
    document.getElementById("hoverImg2").style.display = "block";
    document.getElementById("grid2left").style.display = "none";
  }
  if(x=="hv3"){
    document.getElementById("hoverImg3").style.display = "block";
    document.getElementById("grid2left").style.display = "none";
  }
  if(x=="hv4"){
    document.getElementById("hoverImg4").style.display = "block";
    document.getElementById("grid2left").style.display = "none";
  }
}

function returnHoverMenuImage(x){
  if(x == "hv1"){
    document.getElementById("hoverImg1").style.display = "none";
    document.getElementById("grid2left").style.display = "block";
  }
  if(x == "hv2"){
    document.getElementById("hoverImg2").style.display = "none";
    document.getElementById("grid2left").style.display = "block";
  }
  if(x=="hv3"){
    document.getElementById("hoverImg3").style.display = "none";
    document.getElementById("grid2left").style.display = "block";
  }
  if(x=="hv4"){
    document.getElementById("hoverImg4").style.display = "none";
    document.getElementById("grid2left").style.display = "block";
  }
}