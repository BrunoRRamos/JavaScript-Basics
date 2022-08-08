arr = [25, 100, 15, 33, 50, 45, 20]


//Bubble Sort
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            
            if (array[i] < array[j]) {
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

        while (array[actual] < array[actual - 1]) {
            let aux = array[actual]
            array[actual] = array[actual - 1]
            array[actual - 1] = aux
            actual--
        }
    }
}

insertionSort(arr)
console.log(arr)