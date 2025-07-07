function clicou() {
    const li = document.querySelector('li')
    const input = document.querySelector('input')

    li.style.backgroundColor = 'green' // Trocando estilo do elemento com .style

    if( input.value == '123' ) {
    input.style.backgroundColor = 'green'
    input.value = 'Senha Correta'
    } else {
    input.style.backgroundColor = 'red'
    input.value = 'Senha Errada'
    }

    // Trabalhando com classes

    const botao = document.querySelector('button')

    /*
        if( botao.classList.contains('azul') ) {
            botao.classList.remove('azul')
        } else {
            botao.classList.add('azul')
        }
    */

    botao.classList.toggle('azul') // .toggle faz o mesmo que a condicional de cima, se tiver ele remove, se não ele adiciona

    /*
        if( botao.classList.contains('vermelho') ) {
            botao.classList.remove('vermelho')
            botao.classList.add('green')
        } else {
            botao.classList.add('vermelho')
            botao.classList.remove('green')
        }
    */

    // .replace ('remove classe', 'adiciona classe') facilitando a condicional de cima
    botao.classList.contains('vermelho') ? botao.classList.replace('vermelho', 'green') : botao.classList.replace('green', 'vermelho')

    console.log(botao.classList)
}
