const slides = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Display the first slide
slides[currentIndex].style.display = 'block';

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Display the requested slide
  slides[index].style.display = 'block';
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Automatically switch to the next slide every 3 seconds
setInterval(nextSlide, 3000);
// product slide
const sliderContainer = document.querySelector('.slider-container');
const prevBtnslide = document.getElementById('prevBtn');
const nextBtnslide = document.getElementById('nextBtn');
// =============================================
let x = document.getElementById("cart");
let test=document.getElementById('gg');
function myfun(){
  x.innerHTML='1'
  alert('Item add to your cart')
}
test.addEventListener('click',myfun);
// ======================================
let opencart=document.querySelector('.cartcontainer')
let cartopen=document.querySelector('.cash');
let closecart=document.querySelector('.close_cart')
function openc(){
  cartopen.classList.add('open');
}
function closec(){
  cartopen.classList.remove('open');
}
opencart.addEventListener('click',openc);
closecart.addEventListener('click',closec);
// ==================
const checkoutbtn=document.querySelector('.checkout');
const buyitem=document.querySelector('.buyitem');
const exsit=document.querySelector('.exsit');
const back=document.querySelector('.back');
const contineu=document.querySelector('.continue');
// console.log(checkoutbtn);
// console.log(buyitem);
// console.log(exsit);
function seecheckout(){
  buyitem.classList.add('seeit');
  cartopen.classList.remove('open');

}
function exsitcheckout(){
  buyitem.classList.remove('seeit');
}
function thank(){
  buyitem.classList.remove('seeit');
  alert("thank you for buy from our website we'll delivery for you");
}
checkoutbtn.addEventListener('click',seecheckout);
exsit.addEventListener('click',exsitcheckout);
back.addEventListener('click',exsitcheckout);
contineu.addEventListener('click',thank);





