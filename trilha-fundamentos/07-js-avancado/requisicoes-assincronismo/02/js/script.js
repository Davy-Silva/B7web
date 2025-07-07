// O que é JSON? -> JavaScript Object Notation
// é um formato leve de troca de dados, fácil de ler e escrever para humanos e fácil de interpretar e gerar por máquinas. Ele é usado para transmitir dados entre um cliente e um servidor em aplicações web, representando objetos e arrays em texto simples, utilizando a sintaxe do JavaScript mas com suas diferenças, principalmente com uso das aspas.

let pessoa = JSON.parse( '{"nome": "Davy", "idade": 17}' ) // Passa uma string JSON para um Objeto em JS
console.log(pessoa.idade)

let pessoa1 = JSON.stringify({nome: 'Davy', idade: 90}) // Transforma um objeto JS para uma string JSON
console.log(pessoa1)
