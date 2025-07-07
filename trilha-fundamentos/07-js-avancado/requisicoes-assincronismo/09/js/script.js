async function enviar() {
    let arquivo = document.querySelector('#arquivo').files[0]

    let body = new FormData() // serve para criar um objeto que facilita o envio de dados de formulários
    body.append('title', 'bla bla bla')
    body.append('arquivo', arquivo)

    let req = await fetch('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body,
    })
}
