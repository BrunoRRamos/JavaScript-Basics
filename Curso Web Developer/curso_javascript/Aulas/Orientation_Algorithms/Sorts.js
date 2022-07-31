testArray = [25, 100, 15, 33, 50, 45, 20]
test = [
        {name: 'egg', value: 10},
        {name: 'milk', value: 12},
        {name: 'toast', value: 9}
        ]

//Bubble Sort
for (let i = 0; i < testArray.length; i++) {
    for (let j = 0; j < testArray.length; j++) {

        if (testArray[i] < testArray[j]) {
            let aux = testArray[j]
            testArray[j] = testArray[i]
            testArray[i] = aux
        }   
    } 
}

console.log(testArray)
