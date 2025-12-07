const coding = ['html', 'css', 'js', 'react'];

// const values = coding.forEach( (item) => {
    // console.log(item);
    // return item; // this return is ignored by forEach
// })

// console.log(values); // undefined because forEach does not return anything



const myNums = [1,2,3,4,5,6,7,8,9,10];

// myNums.filter( (num) => num > 5 ) // returns a new array [6,7,8,9,10], doesn't print anything 

// const newNums = myNums.filter( (num) => num > 5 );

// console.log(newNums);

// const moreNums = myNums.filter( (num) => {
//     num > 5 
// } ); // does not return due to scope

// in case of {}, always use return keyword

const moreNums = myNums.filter( (num) => {
    return num > 5 
} );

// console.log(moreNums);



const newNums = [];

myNums.forEach( (num) => {
    if (num > 5) {
        newNums.push(num);
    }
})

// console.log(newNums);

const books = [
    {
        title: "Book1", genre: "Fiction", publish: 1981, edition: 2005
    },
    {
        title: "Book2", genre: "Non-Fiction", publish: 1991, edition: 2009
    },
    {
        title: "Book3", genre: "History", publish: 1988, edition: 2010
    },
    {
        title: "Book4", genre: "Science", publish: 2000, edition: 2015
    },
    {
        title: "Book5", genre: "Fantasy", publish: 1995, edition: 2018
    },
    {
        title: "Book6", genre: "Biography", publish: 2010, edition: 2020
    },
    {
        title: "Book7", genre: "Mystery", publish: 2003, edition: 2012
    },
    {
        title: "Book8", genre: "Fantasy", publish: 1999, edition: 2017
    },
    {
        title: "Book9", genre: "Thriller", publish: 2007, edition: 2019
    },
    {
        title: "Book10", genre: "Romance", publish: 2014, edition: 2021
    }
];

// const userBooks = books.filter( (bk) => bk.genre === "Fantasy" );
// const userBooks = books.filter( (bk) => bk.publish >= 2000 );

// const userBooks = books.filter( (bk) => bk.publish >= 2000 && bk.genre === "Thriller" );


const userBooks = books.filter( (bk) => (bk.publish >= 2000 && bk.genre === "Thriller") );


// const userBooks = books.filter( (bk) => {
//     return bk.publish >= 2000 && bk.genre === "Thriller";
// } );

// console.log(userBooks);


const myNumbers = [1,2,3,4,5,6,7,8,9,10];

let upgradedNumbers = myNumbers.map( (num) => num*10 );
// Output: 
// [
//   10, 20, 30, 40,  50,
//   60, 70, 80, 90, 100
// ]


upgradedNumbers = myNumbers.map( (num) => {num*10} );  
// Output:  
// [
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined,
//   undefined, undefined
// ]


upgradedNumbers = myNumbers.map( (num) => { return num*10} ); 
// Output: 
// [
//   10, 20, 30, 40,  50,
//   60, 70, 80, 90, 100
// ]


// console.log(upgradedNumbers);





// chaining

// myNumbers.map().map(),filter();


let newNumbers = myNumbers.map( (num) => num*10 ).map((num) => num+1);
// Output:
// [
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]


newNumbers = myNumbers
            .map( (num) => num * 10 )
            .map((num) => num + 1)
            .filter((num) => num > 40);
// Output:
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]

// console.log(newNumbers);




// reduce

const nums = [1,2,3,4,5,6,7,8,9,10];

// const tot = nums.reduce( function(acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0 ) 

// const tot = nums.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0 ) 

const tot = nums.reduce( (acc, curr) => acc+curr,0 ) 

// console.log(tot);



const shoppingCart = [
    {
        course: "js course",
        price: 2999
    },
    {
        course: "python course",
        price: 999
    },
    {
        course: "mobile dev course",
        price: 5999
    },
    {
        course: "data science course",
        price: 22999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc+item.price, 0 )

console.log(priceToPay);
