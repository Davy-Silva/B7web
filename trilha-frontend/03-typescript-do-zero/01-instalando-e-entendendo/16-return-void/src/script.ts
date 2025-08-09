// O void significa que não tem nenhum retorno aquela função
function removerEl(el: HTMLElement): void {
    el.remove()
    // Se tivesse algum retorno aqui daria erro
}

removerEl( document.querySelector('.teste') as HTMLElement )

// A única forma que é permitida é com types
type qualquerFuncao = () => void

function alerta() {
    return 1
}

// Porque?
// Porque dessa forma, o void siginifica que ele não espera nenhum retorno
// Ou seja, ele não verifica se tem ou não, já que não é necessário
