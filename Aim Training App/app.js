'use strict'

const screens = document.querySelectorAll('.screen');
const startBtn = document.querySelector('#start');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#F3CB03', '#03DAF3', '#F303E8', '#03F30A', '#0749C4', '#FF0000', '#F38A03', '#8000FF']
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})
timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    render(time);
    createRandomCircle();
    setInterval(decreaseTime, 1000);
}
function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        time--;
        render(time);
    }
}
function setTime(min, sec) {
    timeEl.innerHTML = `${min}:${sec}`;
}
function finishGame() {
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
    timeEl.parentNode.classList.add('hide');
};
function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    const color = getRandomColor();
    circle.style.backgroundColor = color;
    board.append(circle);
}
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}
function render(time) {
    let sec = 0;
    let min = 0;
    if (time > 59) {
        sec = time - 60;
        min = 1;
        if (sec < 10) {
            sec = `0${sec}`
        }
        setTime(min, sec);
    } else if (time < 60) {
        sec = time;
        if (sec < 10) {
            sec = `0${sec}`
        }
        setTime(min, sec);
    }
}