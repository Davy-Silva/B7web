// https://jsonplaceholder.typicode.com/posts

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/po2sts')
        .then( ( reponse ) => {
            return reponse.json()
        })
        .then( ( data ) => {
            console.log( data[0].title )
        })
        .catch( () => { // Executado quando acontece algum erro na req
            console.log("ERRO")
        })
        .finally( () => { // Sempre executado no final de tudo
            alert('Acabou o processo')
        })
}

document.querySelector('#botao').addEventListener( 'click', clicou )
