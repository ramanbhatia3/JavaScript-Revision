// Objects

// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Raman",
    "full name": "Ramandeep Bhatia",
    [mySym]: "mykey1",
    age: 21,
    location: "India",
    mail: "raman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser);

// accessing object properties

// console.log(JsUser.mail);
// console.log(JsUser["mail"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// updating object properties
JsUser.mail = "raman@chaicode.com";
// console.log(JsUser.mail);

// Object.freeze(JsUser); // freeze the object, no updation allowed

JsUser.mail = "raman@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
};

JsUser.greetingTwo = function() {
    console.log(`Hello ${this.name} Welcome back!`);
};

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());







const tinderUser = new Object();

// console.log(tinderUser);

tinderUser.name = "Mohit";
tinderUser.age = 21;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Test",
            lastName: "User"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname.userFullname.firstName);

// optional chaining
// console.log(regularUser.fullname?.userFullname.firstName);

const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = {
    key3: "value3",
    key4: "value4"
};

// const obj3 = {obj1, obj2};
// console.log(obj3);

// const newObj = Object.assign(obj1, obj2);
// console.log(newObj);

// const newObj2 = Object.assign({}, obj1, obj2);
// console.log(newObj2);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// spread operator

const newObj3 = {...obj1, ...obj2};
// console.log(newObj3);


const users = [
    {
        userId: 1,
        userName: "raman",
        isActive: true
    },
    {
        userId: 2,
        userName: "mohit",
        isActive: false
    },
    {
        userId: 3,
        userName: "ankit",
        isActive: true
    }
]

console.log(users[1].userName);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));










// object destructuring

const course = {
    courseName: "JavaScript",
    price: "999INR",
    courseInstructor: "Raman Bhatia"
};

// course.courseInstructor

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
console.log(instructor);







// JSON API

// {
//     "courseName": "JavaScript",
//     "price": "999INR",
//     "courseInstructor": "Raman Bhatia"
// }

// [
//     {},
//     {},
//     {}
// ]

// freeapi me

// json formatter