// criar um Type serve para deixar o código mais organizado e simples
// Normalmente para nomear types se usa a convênção Pascal Case
type NomeCompleto = string | number

let nome: NomeCompleto = 'davy'

// Também é possível usar em parâmetros e retornos
function resumo(user: NomeCompleto): NomeCompleto {
    return 'abc'
}

// Sua maior utilidade é em objetos
type User = {
    nome: string,
    idade: number
}

// Deixa mais fácil e organizado quando tem muitas propriedades
function resumo1(usuario: User) {
    return `O nome do usuário é ${usuario.nome}, e tem ${usuario.idade} anos`
}

resumo1({
    nome: 'davy',
    idade: 17
})

// Diferença do interface que também dá para criar types
interface User2 {
    nome: string,
    idade: number
}

// A principal diferença é que o type não é alteravél, o interface você pode definir outras propriedades quando quiser
interface User2 {
    altura: number
}
