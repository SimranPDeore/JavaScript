const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1999, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 2001, edition: 2014},
    { title: 'Book Four', genre: 'Science', publish: 2005, edition: 2006},
    { title: 'Book Five', genre: 'Fiction', publish: 2020, edition: 2024},
]

let userBooks = books.filter((bk) => bk.genre === 'History')
console.log(userBooks)

console.log("------------------ ")

userBooks = books.filter((bk) => {return bk.publish >= 2000})
console.log(userBooks)

console.log("------------------ ")

userBooks = books.filter((bk) => {return bk.publish >= 2000 && bk.genre === 'Fiction'})
console.log(userBooks)

