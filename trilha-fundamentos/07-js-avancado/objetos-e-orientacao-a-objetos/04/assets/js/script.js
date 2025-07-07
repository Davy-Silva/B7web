class Person {
    
    age = 0

    constructor( name ) {
        this.name = name
    }

    sayHi() {
        console.log(`${this.name} diz oi`)
    }
    
    sayGoodbye() {
        console.log(`${this.name} diz tchau`)
    }
}

class Student extends Person { // Criando a classe student que extende Person(Herda as propriedades)
    
    constructor( name, id ) {
        super(name) // super executa a função construtor do pai(Person), ou seja, essa propriedade vem de Person
        this.id = id
    }

    sayGoodbye() {
        console.log(`O estudante ${this.name} diz tchau`)
    }
}

let p1 = new Student('Davy', 1)    
p1.age = 17 // Exemplo de como herda propriedades
console.log(p1)

p1.sayHi() // Executando função herdada do pai
p1.sayGoodbye() // Sobreescrevendo uma função do pai
