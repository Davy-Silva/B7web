// this -> se refere ao próprio objeto

class Person {

    _age = 0 // Variáveis comuns
    steps = 0

    constructor( firstName, lastName ) {
        this.firstName = firstName // Propriedades
        this.lastName = lastName
    }

    takeAStep() {
        this.steps++
    }

    // get -> "Pegar"
    // set -> "Setar"

    get age() {
        return this._age
    }

    set age(x) {
        typeof x === 'number' ? this._age = x : console.log('ERRO, age não é um number')
    }

    // Exemplo usando get para mostrar nome completo
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let p1 = new Person( 'Rihana', 'Moreira' ) // Essas linhas são chamadas de instância
let p2 = new Person( 'Davy', 'Silva' ) // p1 e p2 são objetos

p1.age = 16 // Mudando propriedade do objeto
console.log(p1.age)

console.log(p1.fullName)
