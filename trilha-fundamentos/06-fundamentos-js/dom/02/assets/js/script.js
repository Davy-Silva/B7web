// coloar no button onclick="clicou()"
function clicou() {
    console.log('Botão clicado!');
}

// Outro jeito de definer evento de clique

let botao = document.querySelector('button')
botao.addEventListener('click', () => clicou()) // addEventListener 'escuta' o evento(tipo de evento, função)
