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

const returnData = objectName => {
    for (const key in objectName) {
        return `${key} : ${objectName[key]}`
    }
}

const returnValTarget = (objectName, target) => {
    for (const key in objectName) {
        if (key === target) {
            return `${objectName[key]}`
        }
    }
}

const returnUser = (userCpf, valTarget = "") => {
    const userToReturn = usersDataBase.filter(user => user.cpf === userCpf)
    const runObject = userToReturn[0]

    if (valTarget === ""){
        return returnData(runObject)
    } else {
        return returnValTarget(runObject, valTarget)
    }
}

newUser('Bruno', 19, '111.111.111-11')
newUser('Maria', 34, '222.222.222-22')

console.log(usersDataBase)

deleteUser('', 1)

console.log(usersDataBase)

console.log(returnUser('111.111.111-11', 'name'))
