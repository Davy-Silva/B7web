// event.target -> pega o elemento realmente clicado pelo usuário, ou seja, o elemento mais interno que recebeu o evento.
// event.currentTarget -> pega o elemento ao qual o event listener está atrelado, ou seja, o elemento em que você colocou o addEventListener


// Initial Data


// Objeto areas com probiedades a, b, c como null
let areas = {
    a: null,
    b: null,
    c: null,
}


// Events


// Selecionar todos os .item e adicionar os eventos de dragstart e dragend que executa, dragStart() e dragEnd()
document.querySelectorAll('.item').forEach(( item ) => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})


// Selecionar todas as .area e adicionar os 3 eventos(dragover, dragleave, drop) que executam as funções com o mesmo nome
// dragover roda quando passa por cima do elemento
// dragleave roda quando sair de cima do elemento
// drop roda quando você solta no elemento(só funciona quando libera no dragover, preventDefault())
document.querySelectorAll('.area').forEach(( item ) => {
    item.addEventListener('dragover', dragOver)
    item.addEventListener('dragleave', dragLeave)
    item.addEventListener('drop', drop)
})

// Selecionar .neutralArea e adicionar os mesmos eventos de cima, com Neutral no final das funções
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral)
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)


// Functions Item

// Função draStart, adiciona classe dragging no evento
function dragStart( e ) {

    e.currentTarget.classList.add('dragging')
}

// Função dragEnd, remove classe dragging do evento
function dragEnd( e ) {
e.currentTarget.classList.remove('dragging')
}

// Functions Area

// Função dragOver(), adiciona classe hover no evento se o elemento estive vazio
function dragOver( e ) {
    e.preventDefault()

    if( e.currentTarget.querySelector('.item') === null ) {
        e.currentTarget.classList.add('hover')
    }
}

// Função dragLeave(), remove classe hover do evento
function dragLeave( e ) {
    e.currentTarget.classList.remove('hover')
}

// Função drop(), remove a classe hover do evento, seleciona item que está sendo arrastado .dragging
// Verificar se já tem algum item onde vai colocar e se não tiver adiciona o item como filho
// Executa updateAreas()
function drop( e ) {
    e.currentTarget.classList.remove('hover')
    let itemDragging = document.querySelector('.dragging')

    if( e.currentTarget.querySelector('.item') === null ) {
        e.currentTarget.appendChild(itemDragging)

        updateAreas()
    }
}


// Funções Neutral Area

// Função dragOverNeutral(), adiciona classe hover no evento
function dragOverNeutral( e ) {
    e.preventDefault()
    e.currentTarget.classList.add('hover');
}

// Função dragLeaveNeutral(), remove classe hover no evento
function dragLeaveNeutral( e ) {
    e.currentTarget.classList.remove('hover');
}

// Função dropNeutral(), remove classe hover no evento
// seleciona item que está sendo arrastado .dragging, adiciona o item como filho
// Executa updateAreas()
function dropNeutral( e ) {
    e.currentTarget.classList.remove('hover')
    let itemDragging = document.querySelector('.dragging')
    e.currentTarget.appendChild(itemDragging)

    updateAreas()
}


// Logic Functions

// Função updateAreas(), vai em todas as .area, pega data-name
// se area tiver .item, coloca o conteúdo dele dentro de areas selecionando pelo data-name
// se a:1, b:2, c:3 adiciona classe .correct a .areas, caso ao contrario remove
function updateAreas() {
    document.querySelectorAll('.area').forEach(( item ) => {
        let areaName = item.getAttribute('data-name')
        let itemElement = item.querySelector('.item')
        
        itemElement ? areas[areaName] = itemElement.textContent : areas[areaName] = null
    })
    let areasElement = document.querySelector('.areas')
    
    areas.a === '1' && areas.b === '2' && areas.c === '3' ? areasElement.classList.add('correct') : areasElement.classList.remove('correct')
}
