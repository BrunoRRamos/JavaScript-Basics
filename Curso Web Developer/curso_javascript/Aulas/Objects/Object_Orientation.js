//Creating a Class
class Student {
    constructor (name, age, school, course) {
        this.name = name
        this.age = age
        this.school = school
        this.course = course
        }

        //A Class Method
        changeAge(newAge) {
            this.age = newAge
        }

        returnCourse() {
            console.log(this.course)
        }
    }

const bruno = new Student('Bruno', 19, 'UFCG', 'Computer Science')
console.log(bruno)

//Using a Class Method
bruno.changeAge(20)
console.log(bruno.returnCourse())
console.log(bruno)

//class Inheritance
class Programer extends Student {
    constructor(name, age, school, course, language) {
        super(name, age, school, course)
        this.language = language
    } 
}

const brunoProg = new Programer('Bruno', 19, 'UFCG', 'Computer Science', 'JavaScript')
console.log(brunoProg)
