function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName();

// function addTwoNumbers(number1, number2){   // parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){   // parameters
    let result = number1 + number2;
    return result;
    return "Hello World"; // unreachable code
}

addTwoNumbers(); // NaN
addTwoNumbers(5, 7); // arguments

const result = addTwoNumbers(10, 15);
console.log(result); // undefined




function userLoginMessage(username){
    // if(username === undefined){
    //     console.log('Please enter a username');
    //     return;
    if(!username){
        console.log('Please enter a username');
        return;
    }
    return `${username} just logged in`;
}

console.log(userLoginMessage("bhatiaraman3"));
console.log(userLoginMessage(""));
console.log(userLoginMessage());
console.log(userLoginMessage(undefined));
console.log(userLoginMessage(null));


function userLoginMessage(username = "Guest"){
    if(!username){
        console.log('Please enter a username');
        return;
    }
    return `${username} just logged in`;
}

console.log(userLoginMessage("bhatiaraman3"));
console.log(userLoginMessage(""));
console.log(userLoginMessage());
console.log(userLoginMessage(undefined));
console.log(userLoginMessage(null));






// function calculateCartPrice(num){
//     return num
// }

// console.log(calculateCartPrice(5)); // 5
// console.log(calculateCartPrice()); // NaN
// console.log(calculateCartPrice(100,50,200)); // 100


function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(100,50,200));

function calculateCartPrice2(val1, val2,...num){
    return num
}
// console.log(calculateCartPrice(100,50,200,3000,4000));


const user = {
    username: "bhatiaraman3",
    price: 500,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

handleObject({
    username: "Mohit",
    price: 699,
})

const myArray = [1,2,3,4,5];

function getSecondElement(arr){
    return arr[1];
}

console.log(getSecondElement(myArray));
console.log(getSecondElement([10,20,30,40,50]));