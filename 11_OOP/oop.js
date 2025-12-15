// const user = {
//     username: "Raman",
//     age: 21,

//     userDetails: function (){
//         // console.log("Got user detials")
//         console.log(`Username: ${this.username}`)
//         // console.log(this)
//     }
// }

// const user2 = {
//     username: "Mohit",
//     age: 21,

// }

// console.log(user);
// console.log(user.username);
// console.log(user.userDetails());

// Window object is the global object (browsers)

// in node {}

// console.log(this)




// const promiseOne = new Promise()
// const date = new Date()

function User(username,age,branch){
    this.username = username;
    this.age = age;
    this.branch = branch;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this // this is implicity returned so can be left (no need to write)
}

// values get override without using new keyword
// const userOne = User("Raman",21,"CSE")
// const userTwo = User("Mohit",21,"IT")
// console.log(userOne)


const userOne = new User("Raman",21,"CSE")
const userTwo = new User("Mohit",21,"IT")
// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor)
