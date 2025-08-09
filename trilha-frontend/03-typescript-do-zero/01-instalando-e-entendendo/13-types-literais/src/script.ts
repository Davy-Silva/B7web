// Pode ser criado variáveis que já tem um valor definido, e que não pode mudar
let nome: 'Davy' = 'Davy'
// Parece inútil já que const faz isso
const nome1 = 'Davy'

// Onde é útil?
function mostrarText(text: string, position: 'left' | 'center' | 'right') {
    return `<div style="text-align: ${position}">${text}</div>`
}

// Juntando com o union types, se torna muito útil, pois você pode criar variáveis ou parâmetros
// Que podem ter só alguns valores necessários
mostrarText('Davy', 'left')
