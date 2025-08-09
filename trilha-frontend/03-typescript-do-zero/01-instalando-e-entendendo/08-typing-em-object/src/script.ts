// É interessante definir os types das propriedades do objeto quando usar-las
function resumo(usuario: {name: string, age: number}) {
    return `O nome do usuário é ${usuario.name}, e tem ${usuario.age} anos`
}

// Porque? as chances de dar erro são muito menores

let u = {
    name: 'Davy',
    age: 17,
    // Se colocar propriedades a mais não importa, importa se colocar menos do que usou
    sexo: 'm'
}

resumo(u)
