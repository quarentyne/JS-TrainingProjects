'use strict';

const slides = document.querySelectorAll('.slide');
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClass();
        slide.classList.add('active');
    })

}
function clearActiveClass() {
    for (const slide of slides) {
        slide.classList.remove('active');
    }
}