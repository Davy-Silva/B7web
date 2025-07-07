function soltou( event ) {
    console.log( 'tecla apertada: ' + event.code ) // .code pega o codigo da tecla
    // console.log( event.key ) .code pega a letra digitada(Não é tão específico quanto .code)
    console.log( 'Shift? ' + event.shiftKey ) // .shiftKey retorna um boolean, dizendo se o shift estava precionado ou não
    // console.log( event.ctrlKey ) -> Também é possível fazer com outras teclas
}

const input = document.querySelector( 'input' )
input.addEventListener( 'keyup', soltou )


