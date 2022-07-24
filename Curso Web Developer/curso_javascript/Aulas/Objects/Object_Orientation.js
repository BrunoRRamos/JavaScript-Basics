//Creating a Class
class student {
    constructor (name, age, school, course) {
        this.name = name
        this.age = age
        this.school = school
        this.course = course
        
        //A Class Method
        this.changeAge = function change(newAge)  {
            this.age = newAge
        }
    }
}

const bruno = new student('Bruno', 19, 'UFCG', 'Computer Science')
console.log(bruno)

//Using a Class Method
bruno.changeAge(20)
console.log(bruno)

//class Inheritance
class programer extends student {
    constructor(name, age, school, course, language) {
        super(name, age, school, course)
        this.language = language
    } 
}

const brunoProg = new programer('Bruno', 19, 'UFCG', 'Computer Science', 'JavaScript')
console.log(brunoProg)
