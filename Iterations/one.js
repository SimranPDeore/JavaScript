//FOR loop
for(let index = 0; index <= 10; index++)
{
    const element = index;
    if(element == 5)
    {
        console.log("5 is best number")
    }
    console.log(element) 
}
//console.log(element)      out of Scope

//nested loops
for(let i =0; i<=5; i++){
    console.log(`Outer loop value: ${i}`)
    for(let j=0; j<=5; j++){
        console.log(`Inner loop value: ${j} for outer loop ${i}`)
    }
}

//example2: nested loops
for(let i=1; i<=10; i++){
    console.log(`Outer loop value: ${i}`)
    for(let j=1; j<=10; j++){
        console.log(i + '*' + j + ' = ' + i*j)
    }
}

//for loop for ARRAY
let myArray = ['flash', 'batman', 'superman']
console.log(myArray.length)
for(let index = 0; index < myArray.length; index++){
    const element = myArray[index]
    console.log(element)
}

//break and continue keywords: to break loop somewhere in between
for(let i=1; i<=20; i++){
    if(i == 5){
        console.log(`Detected 5`)
        break
    }
    console.log(`Value of i is ${i}`)
}

for(let i=1; i<=20; i++){
    if(i == 5){
        console.log(`Detected 5`)  
        continue                //skip once and then continue, dont come out of loop: as compared to break
    }
    console.log(`Value of i is ${i}`)   //Value of 5 is not printed
}