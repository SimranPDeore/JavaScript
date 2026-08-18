const name = "simran"
const repoCount = 50

//older way of writing js
console.log(name + " " + repoCount + " Value")

//String interpolation: newer way of writing js: In this, you create placeholders to directly inject variables into them

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)
//You can also add METHODS TO VARIABLES using string interpolation
console.log(`Hello my name is ${name.toUpperCase()} and my repocount is ${repoCount}`)

//Another way of String Declaration
const gameName = new String('simranpd')

console.log(gameName[0])
console.log(gameName.__proto__)  //{} : represents it is an object

console.log(gameName.length)
console.log(gameName.toLocaleLowerCase)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(0, 3)
console.log(anotherString)

const anotherString1 = gameName.slice(-7, 4)
console.log(anotherString1)

//trim() method: removes spaces from start as well as end of string
//trimStart(): removes white spaces from start of string
//trimEnd(): removes white spaces from end of string
const newString1 = "    hitesh.   rajesh.  "
console.log(newString1)
console.log(newString1.trim())
console.log(newString1.trimStart())
console.log(newString1.trimEnd())

const url = "https://simran.com/simran%20deore"
console.log(url.replace('%20','-'))
console.log(url.includes('google'))

const name1 = "Hitesh-HC-com"
console.log(name1.split('-'))     //output: array containing 3 strings
console.log(name1.small())       //a built-in JavaScript string method that wraps a string's text inside an HTML <small> tag.




