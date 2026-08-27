//storing strings in array
["", "", ""]
//storing objects in array
[{}, {}, {}]

//1)ARRAYS
//A)for-of loop
const arr = [1, 2, 3, 4, 5]
for(const num of arr){      //In this for-of loop: there is no need of declaration, increement or decreement 
    console.log(num)
}

const greetings= "Hello World!"
for(const greet of greetings){      //In this for-of loop: there is no need of declaration, increement or decreement 
    console.log(`Each char is ${greet}`)
}

//B)for-in loop 
const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(`${key} : ${programming[key]}`)
}

//2)MAPS: contains only unique values in key-value pairs, no duplicate values, follows insertion order
//A)for-of loop
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")      //Map skips duplicate values
console.log(map)

//to independantly print key and value
for (const [key, value] of map){
    console.log(key, ":-", value)
}

//B)for-in loop
//MAPS: MAPS ARE NOT ITERATABLE using for-in loop
for(const key in map){
    console.log(key)
} 
console.log("NO ERROR BUT NO OUTPUT")    //This does not give any error, but it is not iterable so NO OUTPUT

//3)OBJECTS: they cannot be iterated using for-of loop
//A)for-of loop
const myObject ={
     'game1': 'NFS',
     'game2': 'Spiderman',
}
/*for(const [key, value] of myObject){    //TypeError: myObject is not iterable
    console.log(key, ":-", value)
}
*/

//B)for-in loop
//Objects can be iterated using for-in loop
const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myObject1){
    console.log(`Key ${key} is shortcut for value ${myObject1[key]}`)
}

//array keys start with 0 and are always numbers, object keys can be anything like string : hence objects were created



