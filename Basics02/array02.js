const marvel_hereos = ["thor", 'Ironman', "spiderman"]
const dc_hereos = ["superman", "flash", "batman"]

marvel_hereos.push(dc_hereos)

console.log(marvel_hereos)  //prints nested arrays
console.log(marvel_hereos[3])    //3rd element is : ENTIRE SECOND ARRAY
console.log(marvel_hereos[3][1])  

marvel_hereos.concat(dc_hereos)     //prints nested arrays
console.log(marvel_hereos)  

console.log("ALL HEREOS")
//if you store "concat" value in a new variable, it prints a merged array
const allHereos = marvel_hereos.concat(dc_hereos)     //prints nested arrays
console.log(allHereos)

//SPREAD OPERATOR
const all_new_hereos = [...marvel_hereos, ...dc_hereos]
console.log(all_new_hereos)

//flat method: mention till how much depth you want to do flat, BY DEFAULT: DEPTH VALUE: Infinity: this automatically calculates depth
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)    //will print merged array
console.log(real_another_array)

//Data Scraping and other applications: 
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))  //"Hitesh" is now a string , so it gives an empty array for output: as it is not an array anymore

//to create an array from variables using method: Array.of
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
