function clicou() {
    const teste = document.querySelector('#teste')

    console.log(teste) // Imprime div #teste
    console.log(teste.children) // Imprime filhos da div #teste
    console.log(teste.children[0].children) // Imprime filhos dos filhos da div #teste

    const ul = teste.querySelector('ul') // Selecionando ul(filhos) de uma melhor forma
    const li = ul.querySelector('li') // Selecionando li(filhos) de uma melhor forma

    console.log(ul)
    console.log(li)

    console.log(ul.innerHTML) // Imprimindo HTML do elemento
    console.log(ul.outerHTML) // Imprimindo HTML do elemento incluindo ele mesmo
    
    ul.innerHTML = '<li>Item alterado</li>' // Alterando HTML do elemento
    console.log(ul.innerHTML)

    ul.innerHTML += '<li>Item <strong>adicionado</strong></li>' // Adicionando HTML no elemento
    console.log(ul.innerHTML)

    ul.innerText += '<li>Item <strong>adicionado</strong></li>' // Adicionando Texto(É lido como texto, não como HTML) no elemento
    console.log(ul.innerHTML)
}
