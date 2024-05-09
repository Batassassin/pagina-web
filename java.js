const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideContainer = document.querySelector('.slide-container');

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    slideContainer.style.transform = `translateX(${-counter * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    counter--;
    slideContainer.style.transform = `translateX(${-counter * 100}%)`;
});
