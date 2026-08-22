//Value in block scope should not go outside the block, but with "var" it takes the value inside the block
//THIS IS WHY WE DON'T USE "var" FOR VARIABLE DECLARATION
let a = 100
const b = 200
var c = 300
if(true){
    let a = 10
    const b = 20
    c = 30

    //a and b cannot be printed outside the block
console.log("INNER : ", a) 
console.log("INNER : ", b)
console.log("INNER : ", c)
}

console.log("OUTER : ", a) 
console.log("OUTER : ", b)
//c can be printed outside block as it was written using "var": which is not appropriate and it always takes the block value
console.log("OUTER : ", c)

//NESTED SCOPES
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username) //this can be executed here as it has global scope 
    }
    //console.log(website) : this cannot be executed here as it has block scope 

    two()   //Function 2 is called inside function 1
}
one()    //when we call one(), it has nothing to print
//But it calls function two(): which has console.log(username): this prints "hitesh"


if(true) {
    const username = "simran"
    if(username === "simran") {
        const website = " youtube"
        console.log(username + website)
    }
    //console.log(website)   : OUT OF SCOPE
}
//console.log(username)      : OUT OF SCOPE

// ++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++
//METHOD 1 OF DECLARING A FUNCTION
//we can access this function before its declaration because this function is NOT stored in a variable
console.log(addone(5))
function addone(num) {
    return num + 1
}


//METHOD 2 OF DECLARING A FUNCTION: This is also called an EXPRESSION as function is stored in a variable
//addTwo(5)   //cannot access this function before initialization, as it's variable declaration is done after this
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5))   //cannot access this function, before initialization