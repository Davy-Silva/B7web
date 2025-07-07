// https://jsonplaceholder.typicode.com/posts

function clicou() {
    // Métodos: GET, POST, PUT, DELETE
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( ( reponse ) => {
            return reponse.json()
        })
        .then( ( data ) => {
            console.log( data[0].title )
        })
        .catch( () => {
            console.log("ERRO")
        })
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts', { // O segundo parâmetro do fetch é onde se coloca o método e outras coisas como headers e body
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'Título de teste',
            body: 'Corpo do teste',
            userId: 2
        })
    })
    .then( (response) => {
        return response.json()
    })
    .then( (json) => {
        console.log(json)
    })
}

document.querySelector('#botao').addEventListener( 'click', clicou )
document.querySelector('#inserir').addEventListener( 'click', inserir )
