array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(array){
    let finalReturn = '('
    for (let i = 0; i < 3; i++) {
        const element = array[i];
        finalReturn += element
    }
    finalReturn += ') '

    for (let i = 3; i < 6; i++) {
        const element = array[i];
        finalReturn += element
    }
    finalReturn += '-'

    for (let i = 6; i < array.length; i++) {
        const element = array[i];
        finalReturn += element
    }
    return finalReturn
}

 console.log(createPhoneNumber(array))