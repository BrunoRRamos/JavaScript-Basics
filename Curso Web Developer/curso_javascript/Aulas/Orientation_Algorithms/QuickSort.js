const {edFolha, edData, extremeArray} = require('./Variables')

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
console.log(sliceOnReference(edFolha))
//console.log(encontraMenores(extremeArray[8], extremeArray));