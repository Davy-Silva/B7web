// Callback / Ligação de volta
// É uma função que vai lidar com o resultado de alguma coisa no futuro
// Um callback (ou função de retorno) é uma função passada como argumento para outra função, que será executada posteriormente, geralmente após a conclusão de uma operação ou evento.

function clickCallback() {
    console.log('Clicou no botão')
}

document.querySelector('#botao').addEventListener( 'click', clickCallback )
