const usersDataBase = []

//Add a new User:
const newUser = (userName, userAge, userCpf) => {
    let newUserObject = {
        name: userName,
        age: userAge,
        cpf: userCpf,
        id: usersDataBase.length
    }
    usersDataBase.push(newUserObject)
}

//Delete some User:
const deleteUser = (userCpf = '', id = null) => {

    usersDataBase
    .forEach(user => {
        if (user.cpf === userCpf) {
            let indexUser = usersDataBase.indexOf(user)
            usersDataBase.splice(indexUser, 1)
        }

        else if (user.id === id) {
            let indexUser = usersDataBase.indexOf(user)
            usersDataBase.splice(indexUser, 1)
        }
    })
}
const captalize = string => {
    return string[0].toUpperCase() + string.substring(1)
}

const returnUser = (userCpf, valTarget) => {
    try {
        const userToReturn = usersDataBase.filter(user => user.cpf === userCpf)

    switch (valTarget) {
        case "name":
            return `${captalize(valTarget)}: ${userToReturn[0].name}`
        
        case "age":
            return `${captalize(valTarget)}: ${userToReturn[0].age}`
        
        case "id":
            return `${captalize(valTarget)}: ${userToReturn[0].id}`

        default:
            return userToReturn[0];
    }
    } catch (UserNotFound) {
        console.error('User not found.')
    }
}

newUser('Bruno', 19, '111.111.111-11')
newUser('Maria', 34, '222.222.222-22')

console.log(usersDataBase)

deleteUser('', 1)

console.log(usersDataBase)

console.log(returnUser('111.111.111-11', 'name'))