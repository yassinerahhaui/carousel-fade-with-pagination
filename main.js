
const sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
const slideCount = sliderImages.length
let currentSlide = 1;
const slideNumberElement = document.getElementById('slide-number');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');

addEventListener('load', autoSlide());
function autoSlide() {
  setInterval(() => {
    currentSlide >= slideCount ? currentSlide = 1 : currentSlide++;
    theChecker();
  }, 6000);
}

for (let i = 1; i <= slideCount; i++) {
  var paginationItem = document.createElement('li');
  paginationItem.setAttribute('data-index', i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement);
var paginationCreatedUl = document.getElementById('pagination-ul');
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (let i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();
  }
}

theChecker();

function nextSlide() {
  if (nextButton.classList.contains('disabled')) {
    return false
  } else {
    currentSlide++;
    theChecker();
  }

}
function prevSlide() {
  if (prevButton.classList.contains('disabled')) {
    return false
  } else {
    currentSlide--;
    theChecker();
  }
}
function theChecker() {
  slideNumberElement.textContent = `Slide #${currentSlide} of ${slideCount}`;
  removeActiveClasses();
  sliderImages[currentSlide - 1].classList.add('active');
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  if (currentSlide == 1) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }
  if (currentSlide == slideCount) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

function removeActiveClasses() {
  sliderImages.map((img) => img.classList.remove('active'));
  paginationsBullets.map((bullet) => bullet.classList.remove('active'));
}
