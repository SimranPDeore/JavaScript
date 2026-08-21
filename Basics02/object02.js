//objects DECLARATION as singleton or using constructors

//singleton object
const tinderUser1 = new Object()
console.log(tinderUser1)

//non-singleton object
const tinderUser2 = {}
console.log(tinderUser2)

//adding values to the empty object
tinderUser2.id = "123abc"
tinderUser2.name = "Sammy"
tinderUser2.isLoggedIn = false
console.log(tinderUser2)

//operations on an object
console.log(Object.keys(tinderUser2))
console.log(Object.values(tinderUser2))
console.log(Object.entries(tinderUser2))
console.log(tinderUser2.hasOwnProperty('isLoggedIn'))

//nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"

        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

//optional chaining
console.log(regularUser.fullname?.userfullname.firstname)  //checking whether fullname exists

//assign: METHOD 1 for combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4)

//spread: METHOD 2 for combining objects
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5)

//array objects with Comma separated values
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
]
console.log(users[1].email)    //here: index: 1, NOT ID

