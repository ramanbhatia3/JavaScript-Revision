// let name = "Raman" // 5
// let myName = "Raman     " // 10

// i want a property that can give true length
// console.log(myName.trueLength())


let myHeroes = ['captain','thor','hulk']

let heroPower = {
    captain: "shield",
    thor: 'mjolnir',
    hulk: "anger",

    getHulkPower: function(){
        console.log(`Hulk's power is ${this.hulk}`)
    }
}

Object.prototype.raman = function(){
    console.log("Raman is present in all objects")
}

// heroPower.raman()

// myHeroes.raman()


Array.prototype.heyRaman = function(){
    console.log("Raman says Hello")
}

// myHeroes.heyRaman() // works

// heroPower.heyRaman() // error




// inheritance

const User = {
    username: "Raman"
}

const Teacher = {
    makeVideos: true
}

const teacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teacherSupport
}

Teacher.__proto__ = User // older approach

// modern syntax

Object.setPrototypeOf(teacherSupport, Teacher)


let anotherUsername = "Raman Bhatia     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength();
'mohit    '.trueLength();