class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const Hitesh = new Teacher("hitesh","hitesh@google.com","123")

Hitesh.logMe()
Hitesh.addCourse()

const Raman = new User("raman","raman@google.com","123")

console.log(Hitesh === Raman) // false
console.log(Hitesh === Teacher) // false
console.log(Hitesh instanceof Teacher) // true
console.log(Hitesh instanceof User) // true
console.log(Teacher instanceof User) // false