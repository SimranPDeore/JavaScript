//for-each loop: it uses call-back function which has no name
const coding = ["js", "ruby", "java", "python", "cpp"]

console.log(`METHOD 1: callback using function`)
//eg) coding.forEach(function greet() {}) //from this we remove "greet" which is function name
coding.forEach(function(val){
    console.log(val)
})

console.log(`METHOD 2: callback using arrow function`)
//eg) coding.forEach(greet = () => {}) //from this we remove "greet = " which is function name
coding.forEach((item) => {
    console.log(item)
})

console.log(`METHOD 3`)
function printMe(item1){
    console.log(item1)
}
coding.forEach(printMe)     

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

//Object inside array
const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName)
})
