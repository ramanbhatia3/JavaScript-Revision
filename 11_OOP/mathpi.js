// console.log(Math.PI)  // 3.141592653589793

// Math.Pi = 5

// console.log(Math.PI)  // 3.141592653589793


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }



const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log(`chai nahi bnni`)
    }
}

// console.log(chai)

// console.log(Object.getOwnPropertyDescriptor(chai)) // undefined

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

// {
//   value: 'ginger chai',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

// for (const [key,value] of Object.entries(chai)) {
//     if(typeof value !== 'function'){
//         console.log(`${key} : ${value}`)
//     }
// }

// Object.defineProperty(chai, 'name', {
//     enumerable: false,
// })

// for (const [key,value] of Object.entries(chai)) {
//     if(typeof value !== 'function'){
//         console.log(`${key} : ${value}`)
//     }
// }