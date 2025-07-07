function somar( x, y ) { // função padrão
    return x + y
}

let somar1 = function( x, y ) { // Outro método de função
    return x + y
}

// Diferença entre função e arrow function: A arrow function não tem o objeto this

let somar2 = ( x, y ) => { // Arrow funtion
    return x + y
}
    
let somar3 = ( x, y ) => x + y // Arrou function resumida, já que é só uma linha não precisa das chaves e do return
