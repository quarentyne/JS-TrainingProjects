'use strict'

function promo(code) {
    if (typeof code !== 'number' || Math.ceil(Math.log(code + 1) / Math.LN10) !== 8) {
        return 'Error';
    }
    const arr = [];
    let i = 10000000;
    while (i >= 1) {
        let trunced = Math.trunc(code / i);
        arr.push(trunced);
        trunced = trunced * i;
        i = i / 10;
        code = code - trunced;
    }
    if (compare1000(arr) === 2000) {
        return 2000;
    } else if (compare1000(arr) === 1000) {
        return 1000;
    } else if (compare100(arr)) {
        return 100;
    } else {
        return 0;
    }
}

function compare100(array) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumEven += array[i];
        } else {
            sumOdd += array[i];
        }
    }
    if (sumEven > sumOdd) {
        return true;
    }
}
function compare1000(array) {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0 && array[i + 1] % 2 !== 0 && array[i + 1] !== undefined && ((array[i + 2] % 2 === 0) || (array[i + 2] === undefined))) {
            arr.push(array[i]);
            arr.push(array[i + 1])
        }
    }
    if (arr.length === 4) {
        if (compare2000(arr)) {
            return 2000;
        } else { return 1000; }
    }
}
function compare2000(array) {
    let sum1 = array[0] + array[1];
    let sum2 = array[2] + array[3];
    if (sum2 > sum1) {
        return true;
    }
}