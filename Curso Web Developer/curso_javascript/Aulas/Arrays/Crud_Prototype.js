const id = []
const names = []
const ages = []
const cpfs = []

const insert = (name, age, cpf) => {
    id.push(id.length + 1)
    names.push(name)
    ages.push(age)
    cpfs.push(cpf)
}

const update = (id, item, newElement) => {

    if (id.includes(item)) {
        const index = names.indexOf(item)

        if (names.includes(item)) {
            names.forEach(element => {names[index] = newElement});
        } 
    
        else if (ages.includes(item)) {
            ages.forEach(element => {ages[index] = newElement});
        } 
    
        else if (cpfs.includes(item)) {
            cpfs.forEach(element => {cpfs[index] = newElement});
        }
    }
    
}

const deleteUser = (item) => {

    if (id.includes(item)) {
        const index = id.indexOf(item)
        id.pop(index)
        names.pop(index)
        ages.pop(index)
        cpfs.pop(index)
    }

    else if (names.includes(item)) {
        const index = names.indexOf(item)
        id.pop(index)
        names.pop(index)
        ages.pop(index)
        cpfs.pop(index)
    }

    else if (cpfs.includes(item)) {
        const index = cpfs.indexOf(item)
        id.pop(index)
        names.pop(index)
        ages.pop(index)
        cpfs.pop(index)
        
    }
}

const returnUser = (item) => {
    
        if (id.includes(item)) {
            const index = id.indexOf(item)
            return `Id: ${id[index]}, Name: ${names[index]}, Age: ${ages[index]}, Cpf: ${cpfs[index]}`
        }
    
        else if (names.includes(item)) {
            const index = names.indexOf(item)
            return `Id: ${id[index]}, Name: ${names[index]}, Age: ${ages[index]}, Cpf: ${cpfs[index]}`
        }
    
        else if (cpfs.includes(item)) {
            const index = cpfs.indexOf(item)
            return `Id: ${id[index]}, Name: ${names[index]}, Age: ${ages[index]}, Cpf: ${cpfs[index]}`
        }
}

insert('João', 20, '123.456.789-00')
insert('Maria', 45, '123.456.789-00')
insert('José', 18, '123.456.789-00')
insert('Jubileu', 60, '123.456.789-00')

console.log(id)
console.log(names)
console.log(ages)
console.log(cpfs)

update('João', 'Mario')

console.log(id)
console.log(names)
console.log(ages)
console.log(cpfs)

deleteUser(3)

console.log(id)
console.log(names)
console.log(ages)
console.log(cpfs)

console.log(returnUser(2))