function clicou() {
    const input = document.querySelector('input')

    console.log( input.getAttribute('type') ) // .getAttribute pega o atributo(retorna o valor)
    console.log( input.getAttribute('placeholder') )

    input.hasAttribute('placeholder') ? console.log('Tem placeholder') : console.log('Não tem placeholder') //.hasAttribute diz se tem o atributo(retorna boolean)

    input.setAttribute('placeholder', 'Placeholder alterado') // Seta, troca o valor do atributo(atributo, valor para trocar)
}

function mostrarSenha() {
    const botao = document.querySelector('#botaoSenha')
    const input = document.querySelector('#senha')
    const typeInput  = input.getAttribute('type')

    typeInput === 'text' ? input.setAttribute('type', 'password') : input.setAttribute('type', 'text')
    typeInput === 'text' ? botao.innerHTML = 'Mostrar senha' : botao.innerHTML = 'Ocultar senha' 
}
