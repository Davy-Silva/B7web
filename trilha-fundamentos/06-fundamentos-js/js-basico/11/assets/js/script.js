let pessoa = {
    nome: 'Davy',
    sobrenome: 'Silva',
    idade: 17,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}` // this. -> acessa o proprio objeto
    } // Se for Arrow function o this não funciona, pois é uma função anônima que não tem pai
}

console.log(pessoa.nomeCompleto) // Vê como funciona a função dentro do objeto
console.log(pessoa.nomeCompleto()) // Executa a função
