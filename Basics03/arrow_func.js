//this: refers to current context of that scope
const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage: function() {        //node environment: inside function
        console.log(`${this.username} , welcome to website`)
        console.log(this)   //it prints current context of each function
    }
}

user.welcomeMessage()        //function call
user.username = "sam"       //updating/ overriding username
user.welcomeMessage()       //function call

console.log(this)       //here "this" refers to an EMPTY OBJECT: {} , as we are not in the node environment here as there is no context in the global scope

function chai() {
    console.log(this)      //"this" will print a lot of values when called inside a function
}
chai()

//ARROW FUNCTION SYNTAX :  () => {}
//explicit return: you eplicitly use "return" keyword and use {}
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5,9))

//implicit return: do not use "return" keyword and use ()
const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(5,9,7))

const user1 = () => ({username : "hitesh"})
console.log(user1())


