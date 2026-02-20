// Counter in JS using setInterval

let counter = 1;

function callback(){
    console.clear();
    console.log(counter);
    counter++;
}

setInterval(callback, 1000);