function adicionar( ...num ) { // Caso não saiba quantos valores serão mandados, use o operador rest em só um paramêtro(ele pega tudo e transforma em um array)
    console.log( num )
}

adicionar( 5, 6, 7, 8, 9 )


const add = ( nomes, ...novosNomes ) => todosNomes = [ nomes, ...novosNomes ]

let nomes = [ 'Davy', 'Paulo' ]
let outros = add( ...nomes, 'Antonio', 'Rihana', 'José' )

console.log(outros)