let name = "Raman"

let age = 21

// console.log(name + " is " + age);
console.log(`${name} is ${age} years old`); // string interpolation

// String interpolation in JavaScript is a way to insert variables or expressions directly into a string using template literals.

// Template literals are strings wrapped in backticks ( ` ` ), and interpolated values go inside ${ }.

let newName = new String('Ramandeep Bhatia')

console.log(newName[0]);

console.log(newName.__proto__);

console.log(newName.length);
console.log(newName.toUpperCase());

console.log(newName.charAt(6));

console.log(newName.indexOf('p'));

console.log(newName.indexOf('s'));

let newString = name.substring(0,5); //ignores negative values in the start and starts from zerio
console.log(newString);

let anotherString = name.slice(-3,5);
console.log(anotherString);

const newString1 = "   Raman   "
console.log(newString1)
console.log(newString1.trim())

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

let url = "https://raman.com/ramandeep%20bhatia";
console.log(url);

url.replace("%20","-")
console.log(url);
console.log(url.replace("%20","-"));

console.log(url.includes("raman"));
console.log(url.includes("single"));

let sentance = "Raman is 21";

console.log(sentance.split(" "));
