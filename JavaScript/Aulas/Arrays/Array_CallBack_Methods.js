const names = ['maria', 'jose', 'pedro', 'joao', 'joaquim', 'josemaria', 'mariajose'];
const list = [4, 6.7, 3, 4.5, 8, 6, 10,]

//map
let newNotes = list.map(note => note == 10 ? note : ++note)
console.log(newNotes);

//filter
let reproved = names.filter((_, index) => list[index] < 5)
console.log(reproved);

//reduce
function media(array) {
    const med = array.reduce((acumulator, current) => acumulator + current) / array.length;
    return med;
}
console.log(media(list).toFixed(2));

