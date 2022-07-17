const students = ['Juan', 'Pedro', 'Maria', 'Luis', 'Jorge'];
const notes = [10, 9, 8, 7, 6];

const search = (name) => {
    if (students.includes(name) === true) {
        let Index = students.indexOf(name)
        return `Hello ${name}, your note is ${notes[Index]}.`
    }else {
        return `Student ${name} not found`
    }
    
}

console.log(search('Pedro'))