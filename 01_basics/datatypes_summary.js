// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


// JavaScript is a dynamically typed language
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const temp = null;
let userEmail; //undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid); //false

const bigNumber = 34566777654333467n;

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["batman","superman","hulk"];

let myObj = {
    name:"Raman",
    age:21
};

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
console.log(typeof myFunction); //outputs function but is called object fuunction

console.log(typeof id); 

// https://262.ecma-international.org/5.1/index.html#sec-11.4.3