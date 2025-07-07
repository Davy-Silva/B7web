function somar( n1, n2 ) { //  Passando os parâmetros n1 e n2
    let soma = n1 + n2
    console.log( `Resultado: ${soma}` )
    return soma
}

somar( 5, 10 ) // Usando os parâmetros n1 e n2

// Entrada -> Processamento -> Saída

function nomeCompleto( nome, sobrenome ) {
    return `${nome} ${sobrenome}` // Retorna esse valor
}

let completo = nomeCompleto( "Lucas", "Silva" ) // Armazena o retorno da função