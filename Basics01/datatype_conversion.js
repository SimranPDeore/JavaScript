//CONVERSION INTO NUMBER

let score = 33;                     //"33"  => 33
console.log(typeof score);

let score1 = "33abc";               //"33abc" => NaN
console.log(typeof score1);

let score2 = 0;
console.log(typeof score2);

let score3 = undefined;
console.log(typeof score3);

let score4 = null;
console.log(typeof score4);

let score5 = true;              //true => 1; false => 0
console.log(typeof score5);

//TYPE CONVERSION
let valueInnumber = Number(score1);   //value of score1 is converted to Number type
console.log(typeof valueInnumber);
console.log(valueInnumber);


//CONVERSION INTO BOOLEAN

let isLoggedIn = 1;
let a = Boolean(isLoggedIn)
console.log(a);               //1 => true

let isLoggedIn1 = 0;
let a1 = Boolean(isLoggedIn1)
console.log(a1);               //0 => false

let isLoggedIn2 = "";
let a2 = Boolean(isLoggedIn2)
console.log(a2);               //"" => false,  " " => true

let isLoggedIn3 = "Simran";
let a3 = Boolean(isLoggedIn3)
console.log(a3);               //"Simran" => true


//CONVERSION INTO STRING
let someNumber = 33;
let stringNumber = String(someNumber)
console.log(typeof stringNumber);

