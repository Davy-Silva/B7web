// Promisse -> Uma Promise (ou Promessa) é um objeto em JavaScript que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu resultado.
function pegarTemperatura() {
    return new Promise(function( resolve, reject ) {
        console.log('Pegando temperatura...')

        setTimeout( () => resolve('40 na sombra'), 2000 )
    })
}

let temp = pegarTemperatura()
temp.then( (resultado) => console.log(`temperatura: ${resultado}`) ) // .then quando a promisse deu certo
temp.catch( (error) => console.log('Deu erro malandro') ) // .catch quando promisse deu errado
