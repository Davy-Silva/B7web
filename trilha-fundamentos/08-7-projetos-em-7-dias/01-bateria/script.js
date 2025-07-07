// Captura qualquer tecla clicada e envia para playSoung()
document.addEventListener('keyup', ( event ) => playSoung( event ))

// Captura o clique no botão 'tocar' e executa a função
document.querySelector('.composer button').addEventListener('click', () => {
    // Tranforma o texto escrito no input em um Array, onde cada letra é um elemento
    let textArray = document.querySelector('#input').value.split('')

    // Passa por todo o array, onde em cada elemento envia o valor dele
    textArray.forEach(( valor, index ) => {
        // Multiplica a cada index para não tocar tudo de um vez
        setTimeout(() => playSoung( valor ), 200 * index);  
    })
})

function playSoung(n) {
    // Pegando o código da key e elementos do html
    let key = typeof n === 'string' ? `key${n.toLowerCase()}` : `key${n.key.toLowerCase()}`;
    let divEl = document.querySelector(`div[data-key="${key}"]`) 
    let audioEl = document.querySelector(`#s_${key}`)

    // Se audioEl for true executa
    audioEl && (
        audioEl.currentTime = 0, // Zera o áudio
        audioEl.play() // Toca o áudio
    )
    divEl && (
        divEl.classList.add('active'), // Adiciona a classe active
        setTimeout(() => divEl.classList.remove('active'), 200) // Remove a classe active depois de 200ms
    )
}
