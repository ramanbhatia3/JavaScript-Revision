// while

// while (condition) {
    
// }

let index = 0;
while (index <= 10) {
    const element = index;
    // console.log(element);
    index += 2;
}

let myArray = ['flash', 'batman', 'catwoman', 'superman', 'wonderwoman'];
let i = 0;

while (i<myArray.length) {
    const element = myArray[i];
    // console.log(element);
    i++;
}




// do while

// do {
    
// } while (condition);

let score = 1;

do {
    // console.log(`score is ${score}`);
    score++;
} while (score <= 10);

score = 11;

do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);