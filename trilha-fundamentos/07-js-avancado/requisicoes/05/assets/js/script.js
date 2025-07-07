// https://jsonplaceholder.typicode.com/posts

// Promise = Promessa

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts') // Fazendo Req
        .then( ( reponse ) => { // (.then = e então | .then são callbacks) Pego a resposta pura e
            return reponse.json() // Transformo ela em um objeto
        })
        .then( ( data ) => { // Depois pego essa resposta em forma de objeto
            console.log( data[0] )
        })
    alert("Opa, clicou") // Exemplo de Assíncrono, o alert roda prieiro que os .then(porque o .then só vai ser executado quando tiver a resposta, enquanto isso o código segue)
}

// Quando passa o mouse por cima de "soma" e outras coisas também, mostra o tipo dos parâmetros e o tipo de variável que a função retorna (x: any, y: any): string
function soma( x, y ) {
    return "somado"
}

// No fetch ele retorna uma promise(Promessa)
// Promisse é um objeto que a resposta final será no futuro (Normalmente coisas assíncronas retornam promessas)
let req = fetch('https://jsonplaceholder.typicode.com/posts') // Também pode ser feito assim, com variáveis
req.then()

// No querySelector ele mostra : Element || null (retorna um elemento ou nulo)
document.querySelector('#botao').addEventListener( 'click', clicou )
