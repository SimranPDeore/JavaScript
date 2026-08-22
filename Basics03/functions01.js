function sayMyName(){

    console.log("S")
    console.log("I")
    console.log("M")
    console.log("R")
    console.log("A")
    console.log("N")
}

sayMyName()           //Function call

//METHOD 1
function addTwoNumbers(number1, number2){     //parameters
    console.log(number1 + number2)
}
addTwoNumbers(5, 8)                           //arguments

//METHOD 2
function addTwoNumbers1(number1, number2){     //parameters
    let result1 = number1 + number2
    return result1
}
const result1 = addTwoNumbers1(15, 28)     
console.log("Result: ", result1)                    

//METHOD 3
function addTwoNumbers2(number1, number2){     //parameters
    return number1 + number2
    console.log(number1 + number2)    //this will not be executed as it is printed after return
}
console.log(addTwoNumbers2(115, 228))     

//looping if no value is given 
//METHOD 1
function loginUserMessage(username){

    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return console.log(`${username} just logged in`)
}
loginUserMessage()               //Please enter a username
loginUserMessage("")             //just logged in
loginUserMessage("simran")      //simran just logged in

//METHOD 2
function loginUserMessage1(username){

    if(!username){               //this is another way of writing username is undefined
        console.log("Please enter a username")
        return
    }
    return console.log(`${username} just logged in`)
}
loginUserMessage1()             //Please enter a username

//METHOD 3: to avoid if statement: give a default value for username, which can be overriden when mentioned
    function loginUserMessage2(username = "Sam"){

    return console.log(`${username} just logged in`)
}
loginUserMessage2()             //Sam just logged in
loginUserMessage2("Simran")     //Simran just logged in

                   