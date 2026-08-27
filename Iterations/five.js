//filter: returns a value(here: nums), need to specify a condition(here: num > 4)
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//METHOD 1
//arrow function for single value can be written without brackets
const newNums = myNums.filter((num) => num > 4)  //no scope so it returns value automatically
console.log(newNums)

//METHOD 2
const newNums1 = myNums.filter((num) => {       //scope{}, so use "return" keyword
    return num > 4
})                      //without "return", it prints an empty array: []
console.log(newNums1)

//METHOD 3 :  without "filter"
const newNums2 = []
myNums.forEach((num) => {
    if(num > 4){
        newNums2.push(num)
    }
})
console.log(newNums2)