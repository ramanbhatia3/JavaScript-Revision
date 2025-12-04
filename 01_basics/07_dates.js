// Dates 

const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

const myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());

const myCreatedDate2 = new Date(2023,0,23,6,3);
// console.log(myCreatedDate2.toLocaleString());

const myCreatedDate4 = new Date("08-02-2009");
// console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000));

const currentDate = new Date();

console.log(currentDate.getDay());
console.log(currentDate.getHours());
console.log(currentDate.getFullYear());
console.log(currentDate.getMilliseconds());
console.log(currentDate.getMinutes());

console.log(currentDate.getMonth() + 1);

console.log(`This month is the ${currentDate.getMonth() + 1}th month of the year`);

const newDate = new Date();

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}));
