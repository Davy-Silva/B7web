// Síncrono -> linha por linha, em ordem
let nome = 'Davy'
let sobrenome = 'Silva'
let completo = `${nome} ${sobrenome}`

// Assíncrono -> Vai para a próxima linha sem terminar de executar
let nome1 = 'Davy'
let sobrenome1 = 'Silva'
let teperatura = Maquininha.pegarTemperatura() // Linha Assíncrona
let completo1 = `${nome} ${sobrenome}` // Vem para cá sem esperar a resposta da linha anterior