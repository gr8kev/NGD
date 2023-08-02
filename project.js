var counter = document.querySelectorAll(".counter");

counter.forEach(counter => {
  const updateCount = () => {
    var target = +counter.getAttribute("data-target");
    var startingCount = +counter.innerText;
    var increment = Math.floor(target / 25);

    if (startingCount < target) {
      counter.innerText = startingCount + increment;
      setTimeout(updateCount, 100);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});


const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky" ,window.scrollY > 50)
})
const midHeader = document.querySelector(".mid-header");
window.addEventListener("scroll",function(){
    midHeader.classList.toggle("stick" ,window.scrollY > 50)
})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}