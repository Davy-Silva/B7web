// this -> se refere ao próprio objeto

class Person {

    eyes = 'castanho' // Variáveis comuns
    steps = 0

    constructor( name, age ) {
        this.name = name // Propriedades
        this.age = age
    }

    takeAStep() { // Toda vez que eu chamar essa função, ela vai incrementar a variável steps do objeto que foi chamada com ela
        this.steps++
    }

    setAge( newAge ) {
        typeof newAge === 'number' ? this.age = newAge : console.log('Erro, new age não é um number')
    }
}

let p1 = new Person( 'Rihana', 15 ) // Essas linhas são chamadas de instância
let p2 = new Person( 'Davy', 17 ) // p1 e p2 são objetos

p1.age = 16 // Mudando propriedade do objeto

console.log(p1.age)
console.log(p2.eyes)

p1.takeAStep() // Incremetando steps de p1
console.log(`Passos de ${p1.name}: ${p1.steps}`)

p2.setAge(18)
console.log(`${p2.name} tem ${p2.age} anos`)