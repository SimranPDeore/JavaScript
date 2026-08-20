const score = 400
console.log(score)

const balance = new Number(100)   //to specify datatype of a value
console.log(balance)

console.log(balance.toString())  //changes number to string object
console.log(typeof(balance))
console.log(balance.toString().length)
console.log(balance.toFixed(2))  //will give 2 decimals

//Precision works differently for different values
const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3))  

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3))  

const otherNumber2 = 23.8966
console.log(otherNumber2.toPrecision(3))  

//to 
const hundreds = 1000000
console.log(hundreds.toLocaleString())  //US STANDARD - writing numbers with commas
console.log(hundreds.toLocaleString('en-IN'))  //INDIAN STANDARD - writing numbers with commas



//************** MATH **************/
console.log(Math)
console.log(Math.abs(-4))         //absolute value: converts -ve number to +ve number, but NOT vice versa
console.log(Math.round(4.3))     //round: <.5 == current number
console.log(Math.round(4.6))    //round: >.5 == next number  
console.log(Math.ceil(4.2))      //ceil: will always give next number
console.log(Math.floor(4.9))     //floor: will always give current number without decimals

console.log(Math.min(4, 3, 6, 8))     
console.log(Math.max(4, 3, 6, 8))  

console.log(Math.random())            //it will give values between 0 and 1

console.log((Math.random()*10) + 1)                  //to get values greater than 1
console.log((Math.floor(Math.random()*10) + 1))     //to round off to lowest value

//to get a value within a minimum and maximum range
const min = 10
const max = 20
console.log((Math.floor(Math.random() * (max - min + 1)) + min)) // to get values more than min: "+ min"