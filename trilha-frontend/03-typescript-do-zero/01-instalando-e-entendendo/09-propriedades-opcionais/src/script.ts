// Se eu definir o type e não dizer se é opcional ou não, a função vai tratar como uma propiedade obrigatória e vai dar erro
function resumo(usuario: {name: string, age?: number}) {
    if(usuario.age !== undefined) {
        return `O nome do usuário é ${usuario.name}, e tem ${usuario.age} anos`
    } else {
        return `O nome do usuário é ${usuario.name}, e tem ${usuario.age} anos`
    }
}

let u = {
    name: 'Davy',
    age: 17,
}

resumo(u)
