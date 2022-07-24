//Constructor Functions

function newUser (userName, age, salary) {
    this.name = userName
    this.age = age
    this.salary = salary
}

const arrayUsers = new Array
const Bruno = new newUser('Bruno', 19, 7000)
arrayUsers.push(Bruno)

console.log(arrayUsers)
