//Using Map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.map((num) => {return num + 10})
console.log(newNums)

//Chaining
const newNums1 = myNums.map((num) => num*10).map((num) => num+1).filter((num) => num >= 40)
console.log(newNums1)

//reduce: this is also a callback function
const myNums1 = [1, 2, 3]
//accumulator always stores the "CURRENT SUM"
//METHOD 1: reduce using function
const myTotal = myNums1.reduce(function (acc, currvalue) {
    console.log(`accumulator ${acc} and current value ${currvalue}`)
    return acc + currvalue
}, 3)   //starting value for accumulator: 3
console.log(myTotal)

//METHOD 2: reduce using arrow function
const myTotal1 = myNums1.reduce((acc, currvalue) => acc + currvalue, 0 )   //starting value for accumulator: 0
console.log(myTotal1)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
        {
        itemName: "py course",
        price: 999
    },
        {
        itemName: "data science course",
        price: 5999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)
