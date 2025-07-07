let personagem = { // Objeto
    nome: 'Davy',
    idade: 93,
    pais: 'Brasil',
    olhos: ['Azul', 'Preto'],
    caracteristicas: { // Um objeto dentro de outro
        forca: 20,
        magia: 5,
        stamina: 15,
    }
}

personagem.olhos.push = 'Verde' // Colocando mais um valor no Array dentro do objeto

console.log(personagem.idade) // Acessando objeto
console.log(personagem.caracteristicas.forca) // Acessando objeto do outro objeto
console.log(personagem.olhos[1]) // Acessando objeto dentro do Array

personagem.caracteristicas.forca += 5 // Adicionando no objeto

// Objeto com Array dentro, e outro Objeto dentro o Array

let perso = {
    nome: 'Davy',
    idade: 93,
    carros: [
        { modelo: 'Fiat', cor:  'Preto' },
        { modelo: 'Audi', cor:  'Azul' },
        { modelo: 'Ferrari', cor:  'Verde' }
    ]
}

console.log(perso.carros[1].modelo) // Acesando