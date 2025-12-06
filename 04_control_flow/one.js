// if
 
if ( 3!=5 ){
    // console.log("executed")
}

// <, >, <=, >= , ==, != , ===

if ( 3===5 ){
    // console.log("executed")
}

const temperature = 35;

if (temperature < 50){
    // console.log("Temperature is less than 50!");
}

const score = 200;

if (score > 100){
    let power = "fly";
    // console.log(`You have the power to ${power}`);
}

// console.log(`You have the power to ${power}`); // ReferenceError: power is not defined due to block scope of let

const balance = 1000;

// if (balance > 500) console.log("test"); // implicit scope for single statement

// if (balance > 500) console.log("test1"),
// console.log("test2"); // multiple statements with comma operator


// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 1000){
//     console.log("less than 1000");
// } else {
//     console.log("balance is more than or equal to 1000");
// }


const userLoggedIn = true;
const userDebitCard = true;

if (userLoggedIn && userDebitCard){
    // console.log("You can make a purchase");
} else {
    // console.log("You cannot make a purchase");
}

const loggedInFromGoogle = false;
const loggedInFromFacebook = true;

if (loggedInFromGoogle || loggedInFromFacebook){
    // console.log("User logged in");
}

