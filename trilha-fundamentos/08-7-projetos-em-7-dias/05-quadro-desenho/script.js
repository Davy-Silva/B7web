// Initial Data


// Variável de cor, currentColor
let currentColor = ''
// Variável se o modo desenho está ativo, canDraw
let canDraw = false
// Variáveis das posições X e Y do mouse
let mouseX = 0
let mouseY = 0
// Variável do elemento canvas, screen
let screen = document.querySelector('#tela')
// Variável do contexto 2D do canvas, ctx
let ctx = screen.getContext('2d')


// Events


// Colocar evento de click em todos .color e excutar colorClickEvent()
document.querySelectorAll('.color').forEach( item => {
    item.addEventListener('click', colorClickEvent)
})
// Quando o click do mouse abaixar, ative o modo desenho(function mouseDownEvent)
screen.addEventListener('mousedown', mouseDownEvent)
// Quando o click do mouse levantar, desative o modo desenho(Function mouseUpEvent)
screen.addEventListener('mouseup', mouseUpEvent)
// Quando o mouse se mover enquato o modo desenho estiver ativo, desenhe(Function mouseMoveEvent)
screen.addEventListener('mousemove', mouseMoveEvent)
// Colocar evento de click no button limpar quadro e executar clearScreen
document.querySelector('.clear').addEventListener('click', clearScreen)

// Functions


// colorClickEvent pega o evento, depois o atributo data-color e passa esse valor para currentColor
// Também remove a classe .active e adiciona na div da cor clicada
function colorClickEvent( e ) {
    let color = e.target.getAttribute('data-color')
    currentColor = color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}

// mouseDownEvent define a variável canDraw como true
// Pega a posição X e Y do mouse
function mouseDownEvent( e ) {
    canDraw = true

    mouseX = e.pageX - screen.offsetLeft
    mouseY = e.pageY - screen.offsetTop
}

// mouseUpEvent define a variável canDraw como false
function mouseUpEvent() {
    canDraw = false
}

// mouseMoveEvent se canDraw for true, desenha(Function draw(parâmetros da posição do mouse))
function mouseMoveEvent( e ) {
    if( canDraw ) {
        draw( e.pageX, e.pageY )
    }
}

// draw pega a posição atual do mouse
// Pega o ctx(contexto em 2D) e desenha da posição anterior para a atual
// Define a posição atual do mouse para as variáveis que estão com a posição anterior(mouseX e mouseY) 
function draw( x, y ) {
    let pointX = x - screen.offsetLeft
    let pointY = y - screen.offsetTop

    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.linejoin = 'round'
    ctx.moveTo( mouseX, mouseY )
    ctx.lineTo( pointX, pointY )
    ctx.closePath()
    ctx.strokeStyle = currentColor
    ctx.stroke()

    mouseX = pointX
    mouseY = pointY
}

// clearScreen limpa o canvas
function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
