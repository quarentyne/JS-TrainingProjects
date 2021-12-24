'use strict'

const board = document.querySelector('#board');
const SQUARES_NUMBER = 800;
const colors = ['#F3CB03', '#03DAF3', '#F303E8', '#03F30A', '#0749C4', '#FF0000', '#F38A03', '#8000FF']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square);
}
function setColor(elem) {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}