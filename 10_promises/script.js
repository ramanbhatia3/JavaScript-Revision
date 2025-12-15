// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2")
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Task 2 resolved")
// })

// const promiseThree = new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         resolve({
//             username: "rbhatia09",
//             mail: "rbhatia09@gmail.com"
//         })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username: "mohit5", password: "123"})
//         } else{
//             reject("ERROR! Something Went Wrong!")
//         }
//     }, 1000);
// })

// const name = promiseFour.then((user)=>{
//     console.log(user)
//     // console.log(user.username) // mohit5
//     // return user.username // promise pending
// }).catch((error)=>{
//     console.log(error);
// })
// console.log(name)

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username) // mohit5
// }).catch((error)=>{
//     console.log(error);
// })


// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username) // mohit5
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected")
// })

// const promiseFive = new Promise(function (resolve,reject){
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username: "JavaScript", password: "123"})
//         } else{
//             reject("ERROR! JS Went Wrong!")
//         }
//     }, 1000);
// })

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive();

// const requestURL = 'https://api.github.com/users/hiteshchoudhary'

// 'https://jsonplaceholder.typicode.com/users'

// async function getAllUsers(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = response.json 
//     console.log(data)
// }

// async function getAllUsers(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json() // this takes time too
//     console.log(data)
// }

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json() // this takes time too
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllUsers();




fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{console.log("E: ",error)})