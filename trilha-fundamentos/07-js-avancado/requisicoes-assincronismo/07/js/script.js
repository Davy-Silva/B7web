// Async -> é usada para declarar uma função assíncrona, que sempre retorna uma Promise.
// Await -> só pode ser usado dentro de funções async e faz o JavaScript “esperar” a Promise ser resolvida antes de continuar.

document.querySelector('#posts').innerHTML = 'Carregando...'

async function loadPosts() {
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json()
    montarBlog(json)
}

function montarBlog(lista) {
    let html = ''

    for(let i in lista) {
        html += `<h3>${lista[i].title}</h3>`
        html += `${lista[i].body}<br>`
        html += '<hr>'
    }

    document.querySelector('#posts').innerHTML = html
}
