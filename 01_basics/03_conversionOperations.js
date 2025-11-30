// let score = 33;

let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

let age = "21abc"
console.log(typeof score);

let ageInNumber = Number(age)
console.log(typeof(ageInNumber));
console.log(ageInNumber);

let test1 = null;
console.log(typeof test1);

let testInNumber = Number(test1)
console.log(typeof(testInNumber));
console.log(testInNumber);

let test3 = true;
console.log(typeof test3);

let test3InNumber = Number(test3)
console.log(typeof(test3InNumber));
console.log(test3InNumber);

let test4 = false;
console.log(typeof test4);

let test4InNumber = Number(test4)
console.log(typeof(test4InNumber));
console.log(test4InNumber);

let test5 = "Raman";
console.log(typeof test5);

let test5InNumber = Number(test5)
console.log(typeof(test5InNumber));
console.log(test5InNumber);

// "33" => 33
// "33abc" => NaN
// true => 1;
// false => 0;

// let LoggedIn = 1; //true
// let LoggedIn = ""; //false
let LoggedIn = "Raman"; //true

let booleanLoggedIn = Boolean(LoggedIn);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn);

// 1=> true
// 0 => false
// "" => false
// "Raman" => true

let someNumber = 33;

let convertedString = String(someNumber)
console.log(typeof convertedString)
console.log(convertedString)