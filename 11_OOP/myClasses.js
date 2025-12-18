// ES6

class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("user1","userOne@google.com","123")

console.log(newUser.encryptPass())
console.log(newUser.changeUsername())

// behind the scene

// function userFN(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// userFN.prototype.encryptPass = function(){
//     return `${this.password}abc`
// }

// userFN.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const anotherUser = new userFN("user2","userTwo@google.com","123")

// console.log(anotherUser.encryptPass())
// console.log(anotherUser.changeUsername())