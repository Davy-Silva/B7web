// https://jsonplaceholder.typicode.com/posts

const postArea = document.querySelector('.posts')

async function readPosts() {
    postArea.innerHTML = 'Carregando...'
    
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    
    if( json.length > 0 ) {
        postArea.innerHTML = ''
        createPost( json )
        
    } else {
        postArea.innerHTML = 'Nenhum post'
    }
}

const createPost = ( json ) => {
    for( let post of json ) {
        let postDiv = document.createElement('div')
        postDiv.innerHTML = `<h1>${post.title}</h1> ${post.body} <hr>`
        postArea.appendChild( postDiv )
    }
}

document.querySelector('#insertButton').addEventListener( 'click', () => {
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value
    
    if( title && body ) {
        addNewPost( title, body )
    } else {
        alert('Preencha todos os campos!')
    }
})

async function addNewPost( title, body ) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            title, // -> Mesma coisa que title: title,
            body,
            userId: 2
        })
    })
    
    document.querySelector('#titleField').value = ''
    document.querySelector('#bodyField').value = ''

    readPosts()
}

readPosts()
