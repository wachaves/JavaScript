// Arrays //

// let friends = ['Marcos', 'Silvia', 'Elisa']
// friends[1] = 'Junior'
// console.log(friends[1])
// console.log(friends)

// Acrescentando elementos em uma array

// const num = [7, 8, 9, 10]

// // Adicionando elementos na final da lista

// num.push(11, 12, 13)

// // Adicionando elementos no inicio da lista

// num.unshift(1, 2, 3)

// // Adicionando elementos no meio da lista (informar primeiro onde quer iniciar, se irá deletar e a sequencia)

// num.splice(3, 0, 4, 5, 6)

// console.log(num)

// // Procurar itens em uma array //

// // console.log(num.indexOf(5))

// console.log(num.includes(5))

// const movies = [
//     {id: '1', movieName: 'Patch Adams'},
//     {id: '2', movieName: 'Django Livre'},
//     {id: '3', movieName: 'Forrest Gump'},
// ]

// // console.log(movies.find(function(movies) {
// //     return movies.movieName === 'Patch Adams'
// // }))

// // Arrow Function //

// console.log(movies.find(movies => movies.movieName === 'Patch Adams'
// ))

// Removendo elemento de uma Array

// const num = [7, 8, 9, 10]

// // // Remove o ultimo item
// // const final = num.pop()

// // // Remove o primeiro item
// // const final = num.shift()

// // Remove o item no meio
// const final = num.splice(2, 1)


// console.log(num)

// // Esvaziar uma Array //

// let num = [7, 8, 9, 10]

// // num = []
// // num.length = 0
// num.splice(0, num.length)

// console.log(num)

// // Juntar duas Arrays e separar uma Array //

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let letters = ['a', 'b', 'c', 'd', 'e', 'f']

// all = numbers.concat(letters)
// half = all.slice(7, 11)

// console.log(all)
// console.log(half)

// // Join Array //

// let clients = ['Andre', 'Jose', 'Marcela']

// console.log(clients)

// let clientsJoin = clients.join(', ')

// console.log(clientsJoin)

// // Ordenar //

// let clients = ['Jose', 'Andre', 'Marcela' ]

// // clients.sort()
// clients.reverse()


// console.log(clients)

// Verificando elementos na Array //

// const tempLondon = [18, 13, 8, 2]

// // const tempPositive = tempLondon.every(function(value) {
// //     return value >= 0
// // })

// // ou

// const tempPositive = tempLondon.every(value => value >= 0)

// console.log(tempPositive)

// // Filtrar //

// const tempLondon = [18, 13, 8, 2, 0, -2]

// // const tempPositive = tempLondon.filter(function(value) {
// //     return value >= 0
// // })

// // ou

// const tempPositive = tempLondon.filter(value => value >= 0)

// console.log(tempPositive)