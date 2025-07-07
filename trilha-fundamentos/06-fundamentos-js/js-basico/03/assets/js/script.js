function maiorDeIdade( idade ) {
    if( idade >= 18 ) { // Maior de 18 retorna true
        return true
    } else { // Menor de 18 retorna false
        return false
    }
}

let idade = 65
let verificacao = maiorDeIdade( idade )

if( verificacao ) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}