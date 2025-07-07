// Exercício 01
function calcPct( x, y ) {
    return ( y / x ) * 100;
}

let x = 40
let y = 10
let pct = calcPct( x, y )

console.log( `${pct}% de ${x} é ${y}` )

// Exercício 02

function calcImovel( metragem, quartos ) {
    if( quartos === 1 ) {
        quartos = 1
    } else if( quartos === 2 ) {
        quartos = 1.2
    } else {
        quartos = 1.5
    }

    return metragem * (quartos * 3000)
}

let metragem = 123
let quartos = 3
let preco = calcImovel( metragem, quartos )
console.log( `A casa custa R$ ${preco}` )

// Exercício 03

function validar( usuario, senha ) {
    if( usuario === 'pedro' && senha === '123' ) {
        return true
    } else {
        return false
    }
}


let usuario = 'pedro'
let  senha = '123'
let validacao = validar( usuario, senha )

if( validacao ) {
    console.log( 'Acesso concedido.' )
} else {
    console.log( 'Acesso NEGADO!' )
}