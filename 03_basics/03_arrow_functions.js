const user = {
    username: "Raman",
    age: 21,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`);
        // console.log(this);
        // this keyword is used for current context
    }
}

// user.welcomeMessage();

// user.username = 'Mohit';
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     // console.log(this);
//     let username = "raman";
//     console.log(this.username);
// }

// chai();

// const chai = function(){
//     console.log(this);
//     let username = "raman";
//     console.log(this.username);
// }

// chai();

const chai= () => {
    let username = "raman";
    console.log(this.username);
}

// chai();







// const addThree = (num1) => {  // use of {} is known as explicit return 
//     return num1 + 3; 
// }

// implicit return

// const addThree = (num1) => num1 + 3; 
// const addThree = (num1) => (num1 + 3); // also works

//in case of objects 
const addThree = (num1) => ({username: "raman"});


console.log(addThree(4));
