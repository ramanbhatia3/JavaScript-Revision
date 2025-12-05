// arrays

const myArr = [1,2,3,4,5];
const myHeroArr = ['Superman', 'Batman', 'Wonder Woman'];

const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr[0]); // 1
console.log(myArr[1]); // 2


// Array Methods

myArr.push(6); // Adds 6 to the end
console.log(myArr); // [1, 2, 3, 4, 5, 6]

myArr.pop(); // Removes the last element
console.log(myArr); // [1, 2, 3, 4, 5]

myArr.unshift(9); // Adds 9 to the beginning
console.log(myArr); // [9, 1, 2, 3, 4, 5]

myArr.shift(); // Removes the first element
console.log(myArr); // [1, 2, 3, 4, 5]

console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); // -1
console.log(myArr.indexOf(3));

const newArr = myArr.join(); // '1,2,3,4,5'

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);




// slice, splice

console.log("A ",myArr)


const mya1 = myArr.slice(1, 4); // [2, 3, 4]
console.log(mya1);
console.log("B ",myArr); // original array is unchanged

const mya2 = myArr.splice(1, 2); // removes 2 elements starting from index 1
console.log(mya2);
console.log("C ",myArr); // original array is changed






const marvelHeroes = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow'];

const dcHeroes = ['Superman', 'Batman', 'Wonder Woman'];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[5]);
// console.log(marvelHeroes[5][2]);

// const allHeroes = marvelHeroes.concat(dcHeroes);

// console.log(allHeroes);

// spread operator

const allHeroes = [...marvelHeroes, ...dcHeroes];

console.log(allHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[7,8,[5,6,7]]];

const flatArray = anotherArray.flat(2);
const flatArray2 = anotherArray.flat(Infinity);

console.log(anotherArray);
console.log(flatArray);
console.log(flatArray2);

console.log(Array.isArray("Raman"));

console.log(Array.from("Raman"));

console.log(Array.from({name: "Raman"}));

const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;
const score5 = 500;

const scores = Array.of(score1, score2, score3, score4, score5);
console.log(scores);