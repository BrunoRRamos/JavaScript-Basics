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
const deleteUser = (userName = '', userCpf = '', id = null) => {

}

newUser('Bruno', 19, '111.111.111-11')
newUser('Maria', 34, '222.222.222-22')

console.log(usersDataBase)
