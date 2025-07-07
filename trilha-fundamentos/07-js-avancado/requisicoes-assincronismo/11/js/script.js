// Levemente Assíncrono

async function mostar() {
    let reader = new FileReader()
    let imagem = document.querySelector('#imagem').files[0] // Pegando arquivo

    reader.onloadend = function() { // Quando o carregamento finalizar excuta a função
        let img = document.createElement('img') // Criando elemento img
        img.src = reader.result // reader.result vai ter o resultado da imagem para exibir
        img.width = 200 // Definindo um tamanho para img

        document.querySelector('#area').appendChild(img) // img é filho da div #area
    }

    reader.readAsDataURL(imagem) // Usando o reader par ler a imagem, quando ele lê a imagem ele excuta um callback que precisa ser configurado(onloadend)
}
