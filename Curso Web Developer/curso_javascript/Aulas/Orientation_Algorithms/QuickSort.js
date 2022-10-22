const {extremeArray} = require('./Variables')

function encontraMenores(reference, arr) {
    let menores = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].price;
        if (reference > element) {
            menores++;
        }
    }
    replaceArr(arr, arr.indexOf(reference), menores);
    return arr;
}

function replaceArr(arr, fromPosi, forPosi) {
    const element1 = arr[fromPosi];
    const element2 = arr[forPosi];

    arr[forPosi] = element1;
    arr[fromPosi] = element2;
}

function sliceOnReference(arr) {
    let reference = arr[Math.floor(arr.length / 2)];
    encontraMenores(reference, arr);
    let valoresMenores = 0;

    for (let i = 0; i < arr.length; i++) {
        const actual = arr[i];
        if (actual.price <= reference.price && actual != reference) {
            replaceArr(arr, actual, valoresMenores)
            valoresMenores++;
        }
    }
    return arr;
}


//Quick Sort

function quickSort(arr, left, right) {
    if(arr.length > 1) {
        let actualIndex = particiona(arr, left, right)

        if (left < actualIndex - 1) {
            quickSort(arr, left, actualIndex - 1)
        }

        if (actualIndex < right) {
            quickSort(arr, actualIndex, right)
        }
    }

    return arr;
}

function particiona(arr, left, right) {
    let pivo = arr[Math.floor((left + right) / 2)];
    let actualLeft = left;
    let actualRight = right;

    while (actualLeft <= actualRight) {
        while (arr[actualLeft].price < pivo.price) {
            actualLeft++;
        }

        while (arr[actualRight].price > pivo.price) {
            actualRight--;
        }

        if (actualLeft <= actualRight) {
            replaceArr(arr, actualLeft, actualRight);
            actualLeft++;
            actualRight--;
        }
    }
    return actualLeft;
}

const arrSorted = quickSort(extremeArray, 0, extremeArray.length - 1);
module.exports = {arrSorted};