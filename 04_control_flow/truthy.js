const userMail = "r@raman.ai";

if (userMail) {
    console.log("Got user mail.");
    
} else {
    console.log("No user mail found.");
}

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// everything else is truthy

// truthy values

// "0", 'false', " ", [], {}, function(){}, 

const Arr = [];

if (Arr.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator ??: null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 5 ?? 10;

// console.log(val1);



// ternary operator

// condition? true : false

const teaPrice = 50;

teaPrice < 30 ? console.log("I will buy tea") : console.log("I will not buy tea");