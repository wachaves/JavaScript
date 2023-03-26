
let favoriteFood = 'pastel de atum com queijo'
document.getElementById('text').innerHTML = favoriteFood

// let bookTitle = 'Atomic Habits'
// let bookAuthor = 'James Clear'
// let bookPages = 306

// Factory //

// function createBook(title, author, pages) {

//     this.bookTitle = title;
//     this.bookAuthor = author;
//     this.bookPages = pages

// }

// const book1 = new createBook('Atomic', 'James Clear', '306')

// console.log(book1)

// Built in Math //

// console.log(Math.min(1, 3, 15, 2, 7, 4))

// String //

// let message = 'Hey, my name is William'

// console.log(message.startsWith('Hey'))
// console.log(message.length())
// console.log(message.includes('William'))

// Template Literals //

let firstName = 'Joe'

const email = 'Hi ' + firstName + ', \nThe meeting is confirmed! \nWilliam'
const email2 = `Hi ${firstName}, 
The meeting is confirmed! 
William`


console.log(email)
console.log(email2)
