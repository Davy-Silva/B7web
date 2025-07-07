/* Funções de Array */

let fruits = ['Maça', 'Uva', 'Banana', 'Tomate']

fruits[ fruits.length - 1 ] = 'Abacaxi' // Trocando valor

/*
    fruits.pop() // Remove ultimo elemento
    fruits.shift() // Remove primeiro elemento
*/

/* Ordenação de Array */

fruits.join(' ') // "Juntar" Retona uma string depois de cada item do Array

// Se juntar os dois é possível deixar em ordem alfabetica de trás para frente
fruits.sort() // Deixa o Array em ordem alfabetica      
fruits.reverse // Inverte a ordem do Array


let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 },
]

// Lógica da Função para ordenar o Array, todos os itens passam por ela e são alterados
// Retornando True para a função sort() o item fica na frente
cars.sort( ( a, b ) => {
    if( a.year > b.year ) {
        return 1
    } else if( a.year < b.year ) {
        return -1
    } else {
        return 0
    }
})

// Essa porra de cima faz a mesma coisa que essa porra de baixo
cars.sort( ( a, b ) => a.year - b.year )

/* Iteração de Array */

let fruits1 = ['Maça', 'Uva', 'Banana', 'Tomate']

let bigFruits = fruits1.filter( (item) => item.length > 4 ) // .filter filtra os itens usando valor, index e string

let ok = fruits1.every((value) => value.length > 3) // .every retorna true quando todos os itens satisfazem
let ifOk = ok === true ? 'Todos são maior que 3' : 'Não são todos maior que 3'
console.log(ifOk)

let ok1 = fruits1.some( (value) => item.length > 3 ) // .some retorna true quando qualquer item satisfaz

let seTem = fruits.includes('Uva') === true ? 'Tem Uva' : 'Não tem Uva'
