class Person {
    
    age = 0

    constructor( name ) {
        this.name = name
    }

}

function createPerson( name, age ) { // factory -> Uma função que cria objetos, auxiliando a organização e praticidade
    let p = new Person( name )
    p.age = age
    return p // Objeto pronto para usar
}

let p1 = createPerson( 'Davy', 900 )
console.log(`${p1.name} tem ${p1.age} anos.`)
