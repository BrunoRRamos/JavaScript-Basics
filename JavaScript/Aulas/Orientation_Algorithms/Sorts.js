const {edFolha, edData, extremeArray} = require('./Variables')

//Bubble Sort
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            
            if (array[i].price < array[j].price) {
                let aux = array[j]
                array[j] = array[i]
                array[i] = aux
            }   
        } 
    }
}

//Insertion Sort
function insertionSort(array) {
    for (let index = 1; index < array.length; index++) {
        let actual = index
        let prev = index - 1

        while (array[actual].price < array[prev].price) {
            let aux = array[actual]
            array[actual] = array[prev]
            array[prev] = aux
            actual--
        }
    }
}

// Get together Arrays (Sorted);
//(arr1 - sorted) and (arr2 - sorted);
function getLists(array1, array2) {
    let finalArray = [];
    let posiActualArr1 = 0;
    let posiActualArr2 = 0;
    let actual = 0;

    while (posiActualArr1 < array1.length && posiActualArr2 < array2.length) {
        let actualarr1 = array1[posiActualArr1]
        let actualarr2 = array2[posiActualArr2]

        if (actualarr1.price < actualarr2.price) {
            finalArray[actual] = actualarr1;
            posiActualArr1++;
            
        } else {
            finalArray[actual] = actualarr2;
            posiActualArr2++;
        }
        actual++;

        while (actualarr1 < array1.length) {
            finalArray[actual] = actualarr1;
            posiActualArr1++;
            actual++
        }

        while (actualarr2 < array2.length) {
            finalArray[actual] = actualarr2;
            posiActualArr2++;
            actual++
        }
    }
    return finalArray
}

// Merge Sort
function ord(part1, part2) {
    let actualPosiPart1 = 0;
    let actualPosiPart2 = 0;
    const result  = []

    while (actualPosiPart1 < part1.length && actualPosiPart2 < part2.length ){
        let itemPart1 = part1[actualPosiPart1]
        let itemPart2 = part2[actualPosiPart2]

        if (itemPart1.price < itemPart2.price) {
            result.push(itemPart1)
            actualPosiPart1++
        } else {
            result.push(itemPart2)
            actualPosiPart2++
        }
    }
    return result.concat(actualPosiPart1 < part1.length ? part1.slice(actualPosiPart1) : part2.slice(actualPosiPart2))
}

function mergeSort(array) {
    if (array.length > 1) {
        const mid = Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0, mid));
        const part2 = mergeSort(array.slice(mid, array.length));
        array = ord(part1, part2)
    }
    return array
}

console.log(mergeSort(extremeArray))