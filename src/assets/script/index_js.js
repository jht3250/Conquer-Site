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
  var y = document.getElementById("dropdownMobile");
  if (x.className === "topnav") {
      x.className += " responsive";
      y.style.display = "grid";
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

function changeBackgroundImage(x) {
  const grid2 = document.getElementById('grid2');
  setTimeout(() => {
    if(x == "hv1"){
      grid2.style.backgroundImage = `url(../assets/images/drop1.jpg)`;
    }
    if(x == "hv2"){
      grid2.style.backgroundImage = `url(../assets/images/drop2.jpg)`;
    }
    if(x=="hv3"){
      grid2.style.backgroundImage = `url(../assets/images/drop3.jpg)`;
    }
    if(x=="hv4"){
      grid2.style.backgroundImage = `url(../assets/images/drop4.jpg)`;
    }
    grid2.classList.add('fade-in');
  }, 250);
}

function resetBackgroundImage() {
  const grid2 = document.getElementById('grid2');
  setTimeout(() => {
    grid2.style.backgroundImage = "url('../assets/images/drop5.jpg')";
    grid2.classList.add('fade-in');
  }, 500);
}

async function fetchGoogleReviews() {
  const placeId = 'ChIJjUSRAPx55IkR06P1-UDzLWY'; // conquer place id from google maps api
  const apiKey = ''; // our api key 
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // temporary heroku proxy 
  try {
    const response = await fetch(proxyUrl + url);
    const data = await response.json();
    console.log('API Response:', data); 
    if (data.result && data.result.reviews) {
      const reviews = data.result.reviews;
      displayReviews(reviews);
    } else {
      console.error('No reviews found in the API response');
    }
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
  }
}

let currentReviewIndex = 0;
let reviews = [];

function displayReviews(reviewsData) {
  reviews = reviewsData;
  updateReviewCarousel();
}

function updateReviewCarousel() {
  const reviewContainer = document.getElementById('review-container');
  reviewContainer.innerHTML = ''; 

  const visibleReviews = getVisibleReviews();
  visibleReviews.forEach((review, index) => {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';
    if (index !== 1) {
      reviewElement.classList.add('dimmed');
    }

    const authorElement = document.createElement('h3');
    authorElement.textContent = review.author_name;
    reviewElement.appendChild(authorElement);

    const ratingElement = document.createElement('p');
    console.log(review.rating);
    if(review.rating == 5){
      ratingElement.innerHTML = `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>`
      reviewElement.appendChild(ratingElement);
    }
    if(review.rating == 4){
      ratingElement.innerHTML = `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star">`
      reviewElement.appendChild(ratingElement);
    }
    const textElement = document.createElement('p');
    textElement.textContent = review.text;
    reviewElement.appendChild(textElement);

    reviewContainer.appendChild(reviewElement);
  });
}

function getVisibleReviews() {
  const totalReviews = reviews.length;
  const visibleReviews = [];
  for (let i = -1; i <= 1; i++) {
    const index = (currentReviewIndex + i + totalReviews) % totalReviews;
    visibleReviews.push(reviews[index]);
  }
  return visibleReviews;
}

function prevReview() {
  currentReviewIndex = currentReviewIndex - 1 + reviews.length;
  updateReviewCarousel();
}

function nextReview() {
  currentReviewIndex = currentReviewIndex + 1;
  updateReviewCarousel();
}

document.addEventListener("DOMContentLoaded", function() {
  fetchGoogleReviews();

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });
  }

  var header = document.getElementById("navbar-right");
  if (header) {
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        setActivePage(this);
      });
    }
  }

  document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseover', () => {
      document.querySelectorAll('.grid-item').forEach(i => i.classList.remove('open'));
      item.classList.add('open');
    });
  });
});



