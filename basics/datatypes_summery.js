// primitive data type

// 7 types =>
//     string/ number/ Boolean/ null/ undefined/ Symbol/ BigInt


    const score = 100 
    const scoreValue = 100.3 

    const isLoggeddIn = false
    const outsideTemp = null

    let userEmail ;
    
    const id = Symbol('123')
    const anotherId = Symbol('123')

    // console.log(id === anotherId);

// refrence (Non primitive )

// array , objects , Functions

// array
const heros = ["shaktiman", "naagraj", "doga"]
// console.log(typeof heros);

// objects
let myObj = {
    name : "kamlesh",
    age : 45,
}
// console.log(typeof myObj);

// function
const myFunction = function() {
    // console.log("Hello World");
}
// console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++

//  Memories

// stack (primitive) , Heap(non-primitive)


let myYoutube = "kmaleshkumawat"

let anothername = myYoutube

anothername = "hiii hello"

console.log(myYoutube);
console.log(anothername);

let user1 = {
    email : "user@email",
    upi : "user@ybl",
}

let user2 = user1

user2.email = "kamlesh@mail" 

console.log(user1.email);
console.log(user2.email);