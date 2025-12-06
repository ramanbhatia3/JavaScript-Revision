// Immediately Invoked Function Expression (IIFE)

// function connection(){
//     console.log(`Database connected succesfully`);
// }
// connection();

(function connection(){
    console.log(`Database connected succesfully`);
})();

// ()();  --> this part is used to invoke the function immediately

// global scope variables may contain pollution
// IIFE helps to avoid that by creating a separate scope

( () => {
     console.log(`Database 2 connected succesfully`);
})();

(function conn(){
    // named IIFE
     console.log(`Database 3 connected succesfully`);
})();

( (name) => {
     console.log(`Hello, my name is ${name}`);
})("Raman");

// immediately invoked functions are invoked, but they don not know when to stop, so we can use semicolon at the end to avoid any issues while concatenation with other codes.

