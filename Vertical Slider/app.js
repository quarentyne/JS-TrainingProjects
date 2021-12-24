'use strict'

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
let activeSlideIndex = 0;

mainSlide.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});
downBtn.addEventListener('click', () => {
    changeSlide('down');
});
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
});
function changeSlide(str) {
    if (str === 'down') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    }
    else if (str === 'up') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }
    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(-${activeSlideIndex * height}px)`;
}