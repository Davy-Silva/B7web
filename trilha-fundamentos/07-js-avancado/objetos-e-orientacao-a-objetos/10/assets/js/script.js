const defaultUser = {
    name: '',
    email: '',
    level: 1
}

const user1 = {
    ...defaultUser, // Clonando um objeto dentro do objeto criado / Herda todas as propriedades(Ou cria novas propriedades ou substitui)
    name: 'Davy',
    email: 'davysilva1313@gmail.com'
}

const adm1 = {
    ...defaultUser, // Clonando um objeto dentro do objeto criado / Herda todas as propriedades(Ou cria novas propriedades ou substitui)
    name: 'Admin',
    email: '1313@gmail.com',
    level: 2
}

console.log(adm1)
