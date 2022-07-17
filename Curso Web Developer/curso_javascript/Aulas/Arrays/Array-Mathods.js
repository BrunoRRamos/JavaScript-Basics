const array = ['maria', 'jobson', 'pauloguina', 'jailson', 'mucalol', 'francisco']
const numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Slice
console.log('Slice: ')
console.log(`Original Array: ${array}\nSliced Array: ${array.slice(0, 3)}\n`)

//Splice
console.log('Splice: ')
console.log(`Original Array: ${array}\nSpliced Array: ${array.splice(1, 3, 'monique')}\n`)

//forEach
console.log('forEach: ')
numericArray.forEach(num => console.log(num + 2))
console.log()

//filter
console.log('filter: ')
console.log(numericArray.filter(num => num % 2 == 0))
console.log()

//map
console.log('map: ')
console.log(numericArray.map(num => num + 2))
console.log()

//reverse
console.log('reverse: ')
console.log(numericArray.reverse())
console.log()