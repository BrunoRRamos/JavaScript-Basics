const {edFolha, edData} = require('./Variables')

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

// Get together Lists (Sorted)
function getLists(array1, array2) {
    let finalArray = [];
    let posiActualArr1 = 0;
    let posiActualArr2 = 0;

    while (posiActualArr1 < array1.length && posiActualArr2 < array2.length) {
        let actualarr1 = array1[posiActualArr1]
        let actualarr2 = array2[posiActualArr2]
    }

    return finalArray
}