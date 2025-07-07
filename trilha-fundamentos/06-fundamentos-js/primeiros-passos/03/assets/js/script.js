let x = "Davy"
x += " " + 8

console.log(x)

let nome = "Davy"
let sobrenome = "Silva"
//let nomeCompleto = nome + " " + sobrenome -> Concatenação
let nomeCompleto = `${nome} ${sobrenome}` // -> Tamplate String mistura variáveis(entre expressões -> ${}) entre a string

console.log(nomeCompleto)
