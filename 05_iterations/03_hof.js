// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello World!";

for (const greet of greeting) {
    // console.log(greet);
}


// Maps

const map = new Map();

map.set('IN',"India");
map.set('US',"United States of America");
map.set('Fr',"France");
map.set('IN',"India"); // duplicate key will be ignored

// console.log(map);

for (const key of map) {
    // console.log(key); // [ 'IN', 'India' ] etc
}

for (const [key,value] of map) {
    // console.log(key, ":-", value); // IN :- India etc
}


const myObject = {
    "game1" : "The Last of Us",
    "game2" : "God of War",
    "game3" : "Forza Horizon"
};

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value); // TypeError: myObject is not iterable
// }

for (const key in myObject) {
    // console.log(`${key} is ${myObject[key]}`);
}

const programmingLanguages = ['c', 'cpp', 'java', 'js', 'python'];

for (const key in programmingLanguages) {
    // console.log(key); // prints index 0,1,2,3,4
    // console.log(programmingLanguages[key]); // prints c,cpp,java,js,python
}

for (const key in map) {
    console.log(key); // prints nothing as Map is not enumerable
    // console.log(map[key]); // prints nothing as Map is not enumerable
}

const coding = ['html', 'css', 'js', 'react'];

// coding.forEach( function () {}); // callback function so no name

coding.forEach( function (element) {
    // console.log(element);
});

coding.forEach( () => {} ); // arrow function as callback

coding.forEach( (val) => {
    // console.log(val);
})

function printMe(element) {
    // console.log(element);
}

coding.forEach( printMe ); // function name as callback

// coding.forEach( printMe() ); // function call as callback - wrong

function printMe(element, index, arr) {
    // console.log(element, index, arr);
}

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName); 
})