// Knight ou Sorcerer - Guerreiro ou mago / Bruno ou Levi
// LittleMonster ou BigMonster / Celso ou Jordan

class Character {

    _life = 1 // _ é uma convenção de nomeclatura para indicar propiedade interna(manipulada por get e set)
    maxLife = 1
    attack = 0
    defense = 0

    constructor( name ) {
        this.name = name
    }

    get life() { // Se for pegar life vai retornar life
        return this._life
    }
    set life( newLife ) { // Se for setar life, tem que ser maior do que zero, se seta 0
        this._life = newLife < 0 ? 0 : newLife
    }

}

class Knight extends Character {

    constructor( name ) {
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life
    }
}

class Sorcerer extends Character {

    constructor( name ) {
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 3
        this.maxLife = this.life
    }
}

class LittleMonster extends Character {

    constructor( name ) {
        super(name)
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxLife = this.life
    }
}

class BigMonster extends Character {

    constructor( name ) {
        super( name )
        this.life = 120
        this.attack = 14
        this.defense = 6
        this.maxLife = this.life
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El
        this.log = logObject
    }

    start() {
        this.update()

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack( this.fighter1, this.fighter2 ))
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack( this.fighter2, this.fighter1 ))
    }

    update() {
        // Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(0)} HP`
        let fi1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1El.querySelector('.bar').style.width = `${fi1Pct}%`
        
        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(0)} HP`
        let fi2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector('.bar').style.width = `${fi2Pct}%`
    }

    doAttack(attacking, attacked) {
        if( attacking.life <= 0 || attacked.life <= 0 ) {
            this.log.addMensage(`O presunto já está gelado.`)
            return
        }

        let attackFactor = (Math.random() * 2).toFixed(0)
        let defenseFactor = (Math.random() * 2).toFixed(0)

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacking.defense * defenseFactor

        if( actualAttack > actualDefense ) {
            attacked.life -= actualAttack
            this.log.addMensage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            this.log.addMensage(`${attacked.name} conseguiu defender`)
        }

        this.update()
    }
}

class Log {
    list = []

    constructor( listEl ) {
        this.listEl = listEl
    }

    addMensage( msg ) {
        this.list.push( msg )
        this.render()
    }

    render() {
        this.listEl.innerHTML = ''

        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}
