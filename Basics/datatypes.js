//Primitive datatypes: CALL BY VALUE
//7 TYPES: String, Number, Boolean, NULL, Undefined, Symbol, BigInt

//Reference/ Non-Primitive datatypes: CALL BY REFERENCE
//TYPES: Arrays, Objects, Functions

//JS is DYNAMICALY-TYPED LANGUAGE: no need to define datatype 

const score = 100
const scoreValue = 100.3
console.log(typeof score)          //number
console.log(typeof scoreValue)    //number

const isLoggedIn = false
const outsideTemp = null
console.log(typeof isLoggedIn)      //boolean
console.log(typeof outsideTemp)    //object

let userEmail; //this is undefined
console.log(typeof userEmail)      //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId) //false : even though both have same value still output if false
// because Symbol provides them unique values

console.log(id)
console.log(anotherId)
console.log(typeof id)            //symbol
console.log(typeof anotherId)     //symbol

//BigInt: to store large numbers
const bigNumber = 3456789n
console.log(typeof bigNumber)     //bigint


//NON-PRIMITIVE
const heroes = ["avengers", "power rangers", "ironman"]  //ARRAY
let myObj = {
    name: "Simran",
    age: 26,
}

const myFunction = function() {              //FUNCTION
    console.log("Hello World");
}

console.log(typeof heroes)                   //object
console.log(typeof myFunction)              //function