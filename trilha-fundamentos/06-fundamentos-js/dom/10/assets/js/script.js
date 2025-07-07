const input = document.querySelector('input')
const ul = document.querySelector('ul')

// Captura o qualquer evento keydown, se for igual a 'Enter' executa a função newLi()
input.addEventListener( 'keydown', (event) => event.key === 'Enter' ? newLi() : "" ) // O navegador sempre envia o evento(parâmetro da função) para a função que está ouvindo, só é preciso dar um nome

function newLi() {
    const newLi = document.createElement('li') // Variável que cria li
    newLi.innerText = `${input.value}` // Adiciona conteúdo do input no li
    ul.appendChild(newLi) // Diz que li é filho da lista ul
    input.value = '' // Limpa o valor do Input
}
 