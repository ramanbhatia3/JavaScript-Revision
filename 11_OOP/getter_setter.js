class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}raman`
    }

    set password(value){
        this._password = value
    }
}

const raman = new User("raman",'r@google.com',"abc")

console.log(raman.email)