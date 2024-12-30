function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.padding = "0em 10px";
    document.getElementById("navbar").style.opacity = "98%";
    document.getElementById("navbar").style.backgroundImage = "linear-gradient(black, rgb(77,77,77)";
    document.getElementById("logo").style.height = "4em";
    document.getElementById("navbar-right").style.marginTop = "13%";
    document.getElementById("homebtn").style.color = "rgb(256,256,256)";
    document.getElementById("contactbtn").style.color = "rgb(256,256,256)";
    document.getElementById("aboutbtn").style.color = "rgb(256,256,256)";
  } else {
    document.getElementById("navbar").style.padding = "0em 10px";
    document.getElementById("navbar").style.backgroundImage = "linear-gradient(rgb(236, 236, 236), rgb(236, 236, 236))";
    document.getElementById("navbar").style.opacity = "100%";
    document.getElementById("logo").style.height = "7em";
    document.getElementById("navbar-right").style.marginTop = "25%";
    document.getElementById("homebtn").style.color = "#333";
    document.getElementById("contactbtn").style.color = "#333";
    document.getElementById("aboutbtn").style.color = "#333";
  }
}

function navResponsive() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("dropdown");
    if (x.className === "topnav") {
      x.className += " responsive";
      y.style.display = "flex";
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
  var dropdownImage = document.getElementById("grid2left");
    if(x == "header1"){
      dropdownImage.src = "../assets/images/IMG_0433.JPG";
    }
    if(x == "header2"){
      dropdownImage.src = "../assets/images/IMG_0434.JPG";

    }
    if(x=="header3"){
      dropdownImage.src = "../assets/images/IMG_0435.JPG";

    }
    if(x=="header4"){
      dropdownImage.src = "../assets/images/IMG_0436.JPG";
    }
}

function returnHoverMenuImage(){
  var dropdownImage = document.getElementById("grid2left");
  dropdownImage.src = "../assets/images/IMG_0432.JPG";
}