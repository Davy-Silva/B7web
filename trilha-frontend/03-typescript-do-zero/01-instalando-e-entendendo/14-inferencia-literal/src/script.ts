function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    // ......
}

type methods = 'GET' | 'POST'

let url = 'https://seila.com'
let method: methods = 'GET' // Assim fica mais forte o código e o ts não reclama
fazerRequisicao(url, method) // O ts não dá erro, mas reclama que está fraco, pois variáveis podem mudar de valor
