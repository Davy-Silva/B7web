let nome = 'Davy Silva'

let result = nome.length // Para saber quantos caracteres a string tem
let result1 = nome.indexOf('Silva') //Mostra a posicição que o texto começa(em forma de index), se der -1 significa que não achou
let result2 = nome.slice( 0, 6 ) // Pega a infomação do index 0 até o 6(Se colocar só um paramêtro ele começa dali até o final). Ao usar números negativos, ele começa a contagem a partir do final
let result3 = nome.substring( 0, 6 ) // Igual o slice, mas não pode usar números negativos

let text = 'Eu gosto de carros'

let fala = text.replace( 'carros', 'motos' ) // Substitui uma parte da string por outra
let fala1 = text.toUpperCase() // Coloca todas as letras em maiúsculo
let fala2 = text.toLocaleLowerCase() // Coloca todoas as letras em minúsculo 
let fala3 = text.concat( 'Teles' ) // Concatena mais alguma informação(inútil já que pode só colocar + )

nome = 'Davy      Silva'

nome = text.trim() // Remove espaços inuteis

let fala4 = nome.charAt(3) // Para saber qual caracter está na posição 3, inútil já que pode usaar []
let fala5 = nome[3] // Pega o caracter igual um array
let fala6 = nome.split( ' ' ) // Faz um array com a string, a cada vez que ele acha a paramêtro escolhido é a separação de um item do array. Por exemplo ' ', na variável nome = 'Davy Silva' ele vai criar um array com dois itens, 'Davy' e 'Silva'


console.log( result )
