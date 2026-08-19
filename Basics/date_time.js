let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(myDate.getTimezoneOffset())
console.log(myDate.getHours())
console.log(myDate.getMonth())

console.log(typeof(myDate))

//to declare your own date
let myCreatedDate = new Date(2023, 0, 23)  //when you mention month in single digit: start with 0 for : Jan
console.log(myCreatedDate.toDateString())

//to declare your own date and time
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("2023-01-23")
console.log(myCreatedDate2.toLocaleString())
let myCreatedDate3 = new Date("01-23-2023")
console.log(myCreatedDate3.toLocaleString())

//TIMESTAMP
let myTimeStamp = Date.now()
console.log(myTimeStamp)      //output: value in milliseconds from date: 01 Jan 1970 till now

console.log(myCreatedDate.getTime())    //time in milliseconds of creation of this variable 

//to convert milliseconds to seconds and to get the minimum whole number value
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)      //will give today's date
console.log(newDate.getMonth() + 1)  //as months start with: 0 for jan, we do +1 so that user will be able to read output as 1: Jan, 2:Feb and so on
console.log(newDate.getDay())  //we got output == 3: wednesday, as day starts with 1: Mon

//representing date
newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate)