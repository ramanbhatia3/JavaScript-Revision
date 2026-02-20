// Counter in JS without using setInterval

let counter = 1;

function callback(){
    console.clear();
    console.log(counter);
    counter++;

    setTimeout(callback, 1000);
}

setTimeout(callback, 1000);