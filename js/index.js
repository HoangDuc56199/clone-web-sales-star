
// countDown even 
function countdown() {
    const endDate = new Date('2023-10-30 23:58:00').getTime(); 
    const now = new Date().getTime();
    const timeRemaining = endDate - now;
    if (timeRemaining <= 0) {
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
        clearInterval(timer);
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = formatTime(days);
        document.getElementById('hours').innerHTML = formatTime(hours);
        document.getElementById('minutes').innerHTML = formatTime(minutes);
        document.getElementById('seconds').innerHTML = formatTime(seconds);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
const timer = setInterval(countdown, 1000);

// hàm carousel 
function createCarousel(containerId,carouselClass,childOfClass,slideItemClass) {
  let container = document.getElementById(containerId);
  let carousel = container.querySelector(carouselClass);
  let prevButton = container.querySelector('.btn-slide.left');
  let nextButton = container.querySelector('.btn-slide.right');
  let lenghtContainer = carousel.offsetWidth
  let lenghtItem = carousel.querySelector(childOfClass).querySelector(slideItemClass).offsetWidth;
  let lenghtAllItem = carousel.children[0].children.length;
  let currentIndex = 0;
    
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + (lenghtAllItem -(Math.round(lenghtContainer/lenghtItem) -1))) % 
    (lenghtAllItem - (Math.round(lenghtContainer/lenghtItem) -1));
    currentIndex = Math.round(currentIndex);
    updateCarousel();
  });
  Math.round(lenghtContainer/lenghtItem)
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % (lenghtAllItem - (Math.round(lenghtContainer/lenghtItem) -1));  
    currentIndex = Math.round(currentIndex);
    updateCarousel();
  });

  function updateCarousel() {
    const translateXValue = -currentIndex * lenghtItem;
    carousel.style.transform = `translateX(${translateXValue}px)`;
  }
}

createCarousel('carousel-01', '.carousel-even', '.carousel-even-child', '.product-item');
createCarousel('carousel-02', '.carousel-even', '.carousel-even-child', '.product-item');
createCarousel('carousel-03', '.carousel-even', '.carousel-even-child', '.product-item');
createCarousel('carousel-04', '.carousel-even', '.carousel-even-child', '.product-item');
createCarousel('form-02-right', '.carousel-even-form-2-right', '.carousel-even-child-form-2', '.product-item');
createCarousel('form-02-left', '.carousel-even-form-2-left', '.carousel-even-form-2-banner-left', '.banner-link-form-2');

console.log("hello");