

// // Function Declaration //

// function movie() {
//     console.log('The Matrix')
// }

// movie()

// // Function Expression //

// const car = function(){
//     console.log('Tesla')
// }

// car()

// const truck = car

// truck()

// // Argumentos em função //

// // function price(a, b) {
// //     return a + b
// // }

// // console.log(price(10, 20))

// // Arguments //

// function price() {
//     let total = 0
//     for (let value of arguments)
//         total += value
//     return total
// }

// console.log(price(10, 20, 30, 40))

// Valores Default //

// function carLoan(loan, rate, years) {
//     return (loan * rate / 100 * years) + loan
// }

// console.log(carLoan(20000, 2.5, 5))

function carLoan(loan, rate = 2.5, years = 5) {
    return (loan * rate / 100 * years) + loan
}

console.log(carLoan(20000))