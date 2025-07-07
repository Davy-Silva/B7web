let list = [ 'ovo', 'café', 'arroz', 'feijão' ]

console.log( Object.keys(list) ) // Retorna um array com os index
console.log( Object.values(list) ) // Retorna um array com os valores(muda nada em array)
console.log( Object.entries(list) ) // Retorna um array com arrays no lugar de cada item, dentro desse array contém o index e o valor

let info = {
    nome: 'Davy',
    sobrenome: 'Silva',
    idade: 17
}

console.log( Object.keys(info) ) // Retorna um array com as propriedades
console.log( Object.values(info) ) // Retorna um array com os valores das propriedades
console.log( Object.entries(info) ) // Retorna um array com arrays no lugar de cada item, dentro desse array contém a propriedade e o valor
