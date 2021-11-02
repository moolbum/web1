const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn'); //이전버튼
const nextBtn = document.querySelector('#nextBtn'); //다음버튼

let counter = 1;
const size = carouselImages[0].clientWidth;


// 버튼 이벤트
nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX('+(- 1600 * counter)+'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX('+(- 1600 * counter)+'px)';
});
