for( let n = 0; n <= 10; n++ ) { // Repete 10 vezes o nome Davy no console
    console.log("Davy")
}

// For em Array

let bolo = ['agua', 'farinha', 'milho', 'tempero', 'sal']
let qtdbolo = bolo.length - 1

for( let i = 0; i <= qtdbolo; i++ ) { // Criar variável; condição; incremento a variável(para quando satisfazer a condição)
    console.log(bolo[i]) // Usa a variável i para pegar a chave do Array
}

// For especifico e inteligente para Arrays

for( let i in bolo ) { // Executa até acabar o Array, usando i como chave
    console.log(bolo[i])
}

// Outra forma

for( let cor of cores ) { // Executa até acabar o Array, mas usando of a variável pega os valores do Array
    console.log(cor)
}