const med = array => {
    let sum_nota = 0
    let med = 0

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum_nota += element
    }

    med = sum_nota / array.length
    return `Media: ${med.toFixed(1)}`
}

//Test
const notas = [1, 2, 3, 4, 5, 6]
console.log(med(notas))