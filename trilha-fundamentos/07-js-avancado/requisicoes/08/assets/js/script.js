// https://jsonplaceholder.typicode.com/posts

// await = esperar

async function clicou() { // Para uma função suportar o await precisa colocar o async no começo da função
    // Métodos: GET, POST, PUT, DELETE
    let response = await fetch('https://jsonplaceholder.typicode.com/posts') // O await antes do fetch faz com que o código só continue depois da requisição acabar(torna síncrona)
    let json = await response.json
    console.log( data[0].title )

    // As linhas 5,6 e 7 substituem todas as de baixo
    // 
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then( ( reponse ) => {
    //         return reponse.json()
    //     })
    //     .then( ( data ) => {
    //         console.log( data[0].title )
    //     })
    //     .catch( () => {
    //         console.log("ERRO")
    //     })

    alert("clicou")
}

async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'Título de teste',
            body: 'Corpo do teste',
            userId: 2
        })
    })
    
    let json = await response.json()

    // Substituindo pro async e await
    // 
    // .then( (response) => {
    //     return response.json()
    // })
    // .then( (json) => {
    //     console.log(json)
    // })
}

document.querySelector('#botao').addEventListener( 'click', clicou )
document.querySelector('#inserir').addEventListener( 'click', inserir )
