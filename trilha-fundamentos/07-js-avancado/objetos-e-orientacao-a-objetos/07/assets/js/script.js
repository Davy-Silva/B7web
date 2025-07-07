// Programação Funcional -> Série de funções se comunicando entre si

// Factory - 'Fabrica'
function createPerson( name, lastName, age ) {
    return {
        name,
        lastName,
        age
    }
}

let person1 = createPerson( 'Davy', 'Silva', 17 )
let person2 = createPerson( 'Rihana', 'Moreira', 15 )

