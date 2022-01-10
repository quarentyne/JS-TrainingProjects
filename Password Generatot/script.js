'use strict'

const min = document.getElementById('min');
const max = document.getElementById('max');
const minLabel = document.getElementById('minLabel');
const maxLabel = document.getElementById('maxLabel');
const button = document.querySelector('button');
const passContent = document.querySelector('.show-password');

min.addEventListener('change', () => {
    minLabel.innerHTML = min.value;
})
max.addEventListener('change', () => {
    maxLabel.innerHTML = max.value;
})
button.addEventListener('click', () => {
    if (minLabel.innerHTML === '' || maxLabel.innerHTML === '') {
        passContent.innerHTML = 'Укажите количество символов';
    } else {
        let pass = generatePassword(generateLength(Number(min.value), Number(max.value)));
        console.log(min.value, max.value);
        passContent.innerHTML = pass;
    }
})
