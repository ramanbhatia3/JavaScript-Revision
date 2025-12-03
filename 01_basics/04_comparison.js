// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2>=1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);
// console.log(1>"1");
// console.log(2>"1");

console.log(null>0);
console.log(null<0);
console.log(null==0);
console.log(null>=0); // the reason  for true is that an eqality check == and comparison <>>=<= works differently.

//Comparisons convert null value to a number, treating it as zero. thats why null>=0 is true and null>0 is false.

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
console.log(undefined>=0);

// === strict check
console.log("2"===1);