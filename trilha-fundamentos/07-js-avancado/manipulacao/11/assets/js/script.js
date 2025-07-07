let numeros = [ 1, 2, 3, 4 ]
let outros = [ ...numeros, 5, 6, 7, 8 ] // Junta o Array numeros com o array outros, sem ficar array dentro de array

let info = {
    nome: 'Davy',
    sobrenome: 'Silva',
    idade: 17
}

let novaInfo = {
    ...info, // Também junta o outro objeto com esse, herdando as propriedades do outro
    cidade: 'São Pedro',
    estado: 'RJ',
    pais: 'BR'
}
