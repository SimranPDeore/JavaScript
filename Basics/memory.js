//Stack memory stores: PRIMITIVE values ,   Heap memory stores: NON-PRIMITIVE values

//Primitive types are stored in a STACK: CALL BY VALUE
let myYoutubename = "SimranDeoredotcom"
let anotherName = myYoutubename         //anothername contains value of myYoutubename in a copy
//so after updation: copy is updated, original value of myYoutubename remains same
console.log(anotherName)

anotherName = "chaiaurcode"    //updated value
console.log(myYoutubename)
console.log(anotherName)


//Non-Primitive types are stored in a HEAP: CALL BY REFERENCE
//all refer to the same value, so if one is updated, others are also updated as changes happen in the original memory
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "simran@google.com"

console.log(userOne.email)
console.log(userTwo.email)



