// Programação Funcional -> Série de funções se comunicando entre si

// Factory - 'Fabrica'
function createPerson( name, lastName, age ) {
    return {
        name,
        lastName,
        age,
        // getFullName: () => `${this.name} ${this.lastName}`   Função anônima é independente, por isso não dá para usar o this.
        getFullName() { return `${this.name} ${this.lastName}` } // Criando a função direto ela faz parte do objeto
    }
}

let person1 = createPerson( 'Davy', 'Silva', 17 )
let person2 = createPerson( 'Rihana', 'Moreira', 15 )

