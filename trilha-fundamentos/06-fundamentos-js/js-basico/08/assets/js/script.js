let colors = ['blue', 'red', 'green']

let lista = ['Davy', 'Bonieky', colors] // Colocando um Array dentro de um Array
let lista2 = ['blabla', ['xx', 'yy']]

console.log(colors[1])
console.log(lista2[1][0]) // Acessando um Array dentro de outro Array

let ingredientes = ['água', 'farinha', 'ovinho', 'alface', 'sal']
ingredientes.push('cebola') // Adicionando novo elemento no Array (no final dele)

console.log(`Total de ingredientes: ${ingredientes.length}`) // Mostrando quantos elementos tem no Array com .length
console.log(ingredientes)
ingredientes.pop() // Remove o ultimo elemento do Array
console.log(ingredientes)
ingredientes.shift() // Remove o primeiro elemento do Array
console.log(ingredientes)
