function clicou() {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')
    
    ul.children[0].append('(alterado)') // .append adiciona um conteúdo(no final) do conteúdo que já está no elemento (Diferente do innerHTML += 'conteúdo')
    ul.children[1].innerHTML += '(alterado)' // Também adiciona, mas apagando e reescrevendo

    let newLi = document.createElement('li') // Criando o elemento na memoria
    newLi.innerText = 'iItem adicionado'

    ul.appendChild(newLi) // Adiciona o newLi como filho(no final) do ul, adiciona igual o .append
    ul.append(newLi) // Também é possível adicionar filho com o .append
    ul.innerHTML += '<li>Item adicionado</li>' // Também adiciona fiho, mas apagando e reescrevendo

    ul.prepend(newLi) // Adiciona o newLi como filho(no começo) do ul, adiciona igual o .append
}
