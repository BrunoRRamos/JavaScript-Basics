//Constructor Functions
function newUser (userName, age, salary) {
    this.name = userName
    this.age = age
    this.salary = salary
    this.updateSalary = function newSalary(newVal) {
        this.salary = newVal
    }
}

const Bruno = new newUser('Bruno', 19, 7000)
Bruno.updateSalary(10000)
console.log(Bruno)


//Herança de Prototype
function kidUser (name, age, salary, school) {
    newUser.call(this, name, age, salary)
    this.school = school
}

const Julio = new kidUser('Julio', 5, 0 , 'Panorama')
console.log(Julio)
