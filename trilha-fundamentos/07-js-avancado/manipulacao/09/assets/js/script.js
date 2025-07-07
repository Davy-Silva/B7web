let info = [ 'Davy Silva', 'Davy', 'Silva', '@davysilv.a' ]

let [ nomeCompleto, nome, sobrenome, instagram ] = info // Desestruturando Array

let info1 = [ 'Davy Silva', 'Davy', 'Silva', '@davysilv.a' ]

let [ nomeCompleto1, , , instagram1 ] = info1 // Quando não quero as criar varíaveis no intervalo

let [ name, lastName, idade = 0 ] = [ 'Davy', 'Silva' ] // Cria um Array já desconstruindo, também é possível colocar valores padrões
