// Síncrono

async function mostar() {
    let imagem = document.querySelector('#imagem').files[0] // Pegando SRC

    let img = document.createElement('img') // Criando Elemento img
    img.src = URL.createObjectURL(imagem) // Passando o SRC para img

    document.querySelector('#area').appendChild = img // Dizendo qu img é filho da div #area
}
