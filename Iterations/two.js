//while loop
let i = 0
while(i <= 10){
    console.log(`Value of index is ${i}`)
    i = i + 2
}

let myArray = ['flash', 'batman', 'superman']
let arr = 0
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`)
    arr = arr + 1
}

let score = 1
do{
    console.log(`Score is ${score}`)
    score++
}while(score <= 10)
//do-while loop does the work first and later checks the condition
let score1 = 11   //Hence we get output : Score is 11, even though this condition : while(score1 <= 10) is false
do{
    console.log(`Score is ${score}`)
    score1++
}while(score1 <= 10)