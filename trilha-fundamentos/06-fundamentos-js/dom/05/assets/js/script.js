function clicou() {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    // after = depois
    // before = antes

    //criando elemento
    const newButton = document.createElement('button')
    newButton.innerHTML = 'Botão'

    ul.after(newButton) // Adiciona elemento depois de ul
    ul.before(newButton) // Adiciona elemento antes de ul

    // Criando nova lista
    let newUl = document.createElement('ul') // Criando ul
    ul.after(newUl) // Colocando New Ul depois do Ul já existente

    for( let i = 0; i < 5; i++ ) { // Criando loop que cria 5 li
        let newLi = document.createElement('li')
        newLi.innerHTML = 'Item add' + (i + 1)
        newUl.append(newLi) // Dizendo que os li são filhos do ul criado
    }
}
