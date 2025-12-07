// for

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);
}



for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop Value: ${j} and Outer Loop Value: ${i}`);
    }    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Table of ${i}:`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }    
}


let myArray = ['flash', 'batman', 'catwoman', 'superman', 'wonderwoman'];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
} // Will print undefined at the end because of <= 

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(i);
}