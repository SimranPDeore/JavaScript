//SWITCH CASE CONTROL FLOW

const month = 3   //Method 1: for integer input
//Method2 for string input: const month = "march"
switch(month) {
    case 1:      //case "jan"
        console.log("January")
        break;
    case 2:     //case "feb"
        console.log("February")
        break;
    case 3:     //case "march"
        console.log("March")
        break;
    default:
        console.log("default case match")
        break;
}

//**************************** VERY VERY IMPORTANT ***********************************************
//FALSY VALUES
//false, 0, -0, BigInt, 0n, ""(this is false: no value), null, undefined, NaN

//TRUTHY VALUES : (anything inside string) : all non-falsy values : and more
//"0", 'false', " "(space in empty string is true: it is considered as a value), [](empty array), {}(empty object), function(){}(empty function), 

const userEmail = []          //AS THIS IS A TRUTHY VALUE
if(userEmail){    //for true
    console.log("Got user email")   //THIS IS EXECUTED
}else{           //for false
    console.log("Dont have user email")
}

//TO CHECK IF ARRAY IS EMPTY
if (userEmail.length === 0) {
    console.log("Array is empty")
}

const userEmail1 = ""         //AS THIS IS A FALSY VALUE
if(userEmail1){
    console.log("Got user email")   
}else{
    console.log("Dont have user email")     //THIS IS EXECUTED
}

const emptyObj = {}
//TO CHECK IF OBJECT IS EMPTY
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

//NULLISH COALESCING OPERATOR (??) : null and undefined
let val1, val2, val3, val4
val1 = 5 ?? 10              //always takes first value
val2 = null ?? 10           //value to take to replace null value
val3 = undefined ?? 15      //value to take to replace undefined value
val4 = null ?? 10 ?? 20     //takes only first value
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)

//Ternary Operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")