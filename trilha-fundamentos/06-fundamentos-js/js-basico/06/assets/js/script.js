let count = 10 // Variável de escopo global

function add() {
    let count = 0 // Variável de escopo local
    count++

    console.log( count ) // Preferência para escopo local, Tem aceeso a variáveis criadas no escopo global
}

add()

console.log( count ) // Preferência para escopo global, não tem acesso a variáveis criadas dentro da função