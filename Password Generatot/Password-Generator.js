'use strict'
Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        let num = Math.floor(Math.random() * (i + 1));
        let d = this[num];
        this[num] = this[i];
        this[i] = d;
    }
    return this;
}

function generatePassword(length) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '0123456789!@#$%^&*()-=|/_<>,.`~';
    let pass = [];
    let nABC = generateRandomNumber(1, length - 2);
    length = length - nABC;
    let nSymbols = generateRandomNumber(1, length - 2);
    length = length - nSymbols;
    for (let i = 1; i <= nABC; i++) {
        pass.push(ABC[generateRandomNumber(0, ABC.length - 1)]);
    }
    for (let i = 1; i <= nSymbols; i++) {
        pass.push(symbols[generateRandomNumber(0, symbols.length - 1)]);
    }
    for (let i = 1; i <= length; i++) {
        pass.push(abc[generateRandomNumber(0, abc.length - 1)]);
    }
    pass = pass.shuffle();
    return pass.join('');
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateLength(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
