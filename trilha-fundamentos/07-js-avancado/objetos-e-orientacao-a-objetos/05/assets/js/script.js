class Person {
    
    // Funções dentro de classes se chamam métodos

    static hands = 2 // Variável statica está associada com a classe, mas não com a instância/objeto que você criar
    age = 0

    constructor( name ) {
        this.name = name
    }

    sayHi() {
        console.log(`${this.name} tem ${Person.hands} mãos`) // Person. -> Não é o objeto criado que tem a variável hands, quem tem é a classe Person(porque a variável e static)
    }

    static sayHi2() {
        console.log(`${this.name} tem ${Person.hands} mãos`) // Também pode criar métodos static
    }

}

let p1 = new Person('Davy') // Objeto criado
p1.sayHi()

Person.hands = 3
console.log(`${p1.name} tem ${Person.hands} mãos`)

Person.sayHi2() // Chamando um método static
