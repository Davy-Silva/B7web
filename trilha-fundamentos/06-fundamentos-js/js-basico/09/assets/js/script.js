let carros = ['BMW', 'Ferrari', 'Mercedes']
let x = 1
console.log(`1 - ${carros[x]}`)

carros[x] = 'Audi'
console.log(`2 - Lista com Audi: ${carros}`)

carros.push('Volvo')
console.log(`3 - Lista com Volvo: ${carros}`)

console.log(`4 - Itens no array: ${carros.length}`)
