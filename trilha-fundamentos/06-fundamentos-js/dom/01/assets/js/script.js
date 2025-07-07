/* Get Elements */
let h1s = document.getElementsByTagName('H1') // Selecionando todos H1 do html
console.log(h1s)

let h1Id = document.getElementById('title') // Selecionando elemento com ID title
console.log(h1Id)

let h1Class = document.getElementsByClassName('titles') // Selecionando elemento com ID title
console.log(h1Class)

/* Query Selector */
// Seleciona da mesma forma do CSS
let QSh1 = document.querySelectorAll('h1') // querySelectorAll Seleciona todos os elementos(Sempre retorna um Array), não só o primeiro
console.log(QSh1)

let QSh1Id = document.querySelector('#title') // querySelector retorna o elemento em si
console.log(QSh1Id)

let QSh1Class = document.querySelector('.titles')
console.log(QSh1Class)

let list = document.querySelector('#test ul li') // Também é possível selecionar com seletores descendentes
console.log(list)
