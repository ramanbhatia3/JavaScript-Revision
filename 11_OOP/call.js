function setUsername(username){
    // Complex DB Calls
    this.username = username
};

function createUser(username, email, password){
    // setUsername(username)
    setUsername.call(this, username)

    this.email = email
    this.password = password
};

const user = new createUser("User1","userOne@meta.com","123")
console.log(user) //createUser { email: 'userOne@meta.com', password: '123' }