const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(4, 2, 3, 1) //when using the Array constructor with new, you need parentheses ().

console.log(myArr2[0]);   
console.log(myArr2[1]);   

//Array methods
myArr2.push(6)
myArr2.push(7)
myArr2.push(7)
myArr2.pop()
console.log(myArr2);  

//unshift: enters an element at start of array and moves array to the right
myArr.unshift(9)
console.log(myArr)

//shift: moves array to the left and removes the first element
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));   //as it does not exist, index: -1
console.log(myArr.indexOf(2));   

//join method: adds value of myArr(existing array) to the new array and changes its type to "String"
const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

console.log(typeof myArr)      //array object
console.log(typeof newArr)      //string 

//slice : takes values from 1st element of range upto last element of range(not including last element)
console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("A ", myArr)

console.log("\n")

//splice : includes both start and end of range and also changes original array by removing splice elements from array
console.log("B ", myArr)
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("B ", myArr)




