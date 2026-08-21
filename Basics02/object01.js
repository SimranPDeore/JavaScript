//2 ways of declaring objects: 1)literals and 2)constructors
//singleton object: It is created when you use constructors: onject.create method


//Declaring object using object literals
const Sym2 = Symbol("key2");    //You need to declare Symbol types explicitly outside the object: JsUser

const JsUser = {
    name: "Hitesh",
    "full_name" : "Hitesh Choudhary",    //you can directly represent variable as a string
    age: 18,
    mySym1: "mykey1",
    [Sym2]: "mykey2",
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Method 1 of printing. : USUALLY WE USE DOT METHOD TO ACCESS, UNLESS FOR EXCEPTIONS
//console.log(JsUser.email)
console.log(JsUser.full_name)     

//Method 2 of printing
console.log(JsUser["email"])  //as all variables inside object are considered as string so in bracket method we need to give double quotes
console.log(JsUser["full name"])  
//Symbol can be accessed using only square method
console.log(JsUser[Sym2])  

//Symbol
const mySym = Symbol("key1")
console.log(JsUser.mySym1)  
console.log(typeof JsUser.mySym1)    //IT's type is NOT 

//ONLY WHEN YOU DEFINE A SYMBOL IN SQUARE BRACKETS, THEN IT CAN BE OF TYPE: SYMBOL
console.log(typeof[Sym2])      //Even though it is part of object:JsUser, it is actually an object itself

//Function
JsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting)      //[Function (anonymous)]
console.log(JsUser.greeting())    //Hello Js User

//STRING INTERPOLATION: Using ${} you can add extra variables by writing string in backticks(``)
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greetingTwo)      //[Function (anonymous)]
console.log(JsUser.greetingTwo())    //Hello Js User, Hitesh

//Updating and freezing a value of an object
JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com" //it will not take this value as object is freezed
console.log(JsUser)
