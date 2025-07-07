// Fetch -> Usado para fazer requisições HTTP de forma assíncrona. Busca ou envia dados para servidores (APIs) e retorna uma Promise

document.querySelector('#posts').innerHTML = 'Carregando...'

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resultado) => resultado.json() )
    .then( (json) => {
        montarBlog(json)
    })
    .catch( (erro) => console.log('Deu BO') )
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

// Função que carrega os posts do blog
function loadPosts() {
    
    // Faz uma requisição HTTP para uma API que retorna posts fictícios
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resultado) => resultado.json())// Quando a resposta chega, converte para JSON
    .then((json) => { // Depois que o JSON estiver pronto, passa os dados para montarBlog
        montarBlog(json); 
    }) 
    .catch((erro) => { // Se ocorrer algum erro na requisição, ele será capturado aqui
        console.log('Deu BO'); 
    });
}

