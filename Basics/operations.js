let value = 3
let negValue = -value
console.log(negValue);

console.log(2**3);
console.log(2/3)
console.log(2%3)

let str1 = "Hello"
let str2 = " Simran"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(3 + 4 * 5 % 3)

console.log(+true)
console.log(+"")

let num1, num2, num3;
console.log(num1 = num2 = num3 = 2 + 2)

let a = 100;
b = a++;    //here a becomes 101, but b remains 100, because post-increement
console.log(b)  //b = 100
console.log(a)  //a = 101
c = ++a;     //here ++a = ++101 = 102
console.log(c)  //c = 102, here 'a' as well as 'c' increases, because pre-increement
console.log(a)  //a = 102