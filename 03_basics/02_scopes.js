// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

var c = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inside Block");
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// console.log("Outside Block");
// console.log(a); // ReferenceError
// console.log(b); // ReferenceError
// console.log(c); // 30


// nested scope

function one(){
    const username = "raman";

    function two(){
        const website = "youtube.com";

        console.log(username);
    }

    // console.log(website); // ReferenceError

    two();
}

// one();


if (true){
    const username = "bhatiaraman3";
    if (username == "bhatiaraman3"){
        const website = "github.com";
        // console.log(username+" "+website);
    }
    // console.log(website); // ReferenceError
}



// +++++++++++++++++++ interesting ++++++++++++++++++++

addOne(5); // 6
console.log(addOne(5)); // no error because of hoisting


function addOne(num){
    return num + 1;
}


// addTwo(5); // TypeError: addTwo is not a function because addTwo is a function expression and not hoisted.

const addTwo = function(num){ // expression
    return num + 2;
}

addTwo(5); // 7