//REST OPERATOR: add ...(dots) : minimum = 3 dots. Looks similar to SPREAD OPERATOR
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 50000, 789))  //prints an array 
//without rest operator: prints ONLY first value

function calculateCartPrice1(val1, val2, ...num1){ //considers 1st and 2nd value as val1 and val2
    return num1
}
console.log(calculateCartPrice1(200, 300, 400, 50000, 789)) //rest all values come in num1

//Passing object into function 
const user = {                        //user is an object
    username: "hitesh",
    price: 199
}

//METHOD 1
function handleObject(anyObject){    //handleObject is a function
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)

//METHOD 2: This function always does a console.log() whenever you call it,
// as console.log() is still inside your handleObject() function
handleObject({        //directly passing object into function: it is overriding values of "user object"
    username : "Sam",
    price : 399
})

//Passing Array into Function
const myArray = [200, 300, 400, 600]

//METHOD 1
function returnSecondValue(getArray){
    return getArray[1]  //2nd element is at position 1
}
console.log(returnSecondValue(myArray)) 

//METHOD 2: you can directly pass the array
console.log(returnSecondValue([200, 300, 400, 600]))