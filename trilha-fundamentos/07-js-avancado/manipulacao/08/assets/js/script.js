let pessoa = {
    nome: 'Davy',
    sobrenome: 'Silva',
    nomeDoMeio: 'Teles',
    idade: 17,
    NomeDaMae: 'Mãe',
    social: {
        facebook: 'Davy Face',
        instagram: 'Davy insta'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

// Ao invés de fazer isso
// let nome = pessoa.nome
// let sobrenome = pessoa.sobrenome
// let idade = pessoa.idade

// Faça a desestruturação de objetos
let { nome, sobrenome } = pessoa // Transforma nome, sobrenome variáveis disponíveis
let { idade:pessoaIdade } = pessoa // Transforma idade em uma variável, mas com nome escolhido de pessoaIdade
let { NomeDaMae = 'Sem mãe' } = pessoa // Transforma nomeDaMae em uma variável e coloca um valor padrão, para caso não tenha achado valor

// Aula 2

// let { facebook, instagram } = pessoa.social -> Assim que se pega objetos dentro de objetos
let { nomeCompleto, social:{ instagram, facebook } } = pessoa // Se quiser pegar objetos dentro de outros objetos junto com propriedades normais

function pegarNomeCompleto( {nome, sobrenome, nomeDoMeio} ) { // Já desconstroí o objeto no lugar do paramêtro
    return `${nome} ${sobrenome} ${nomeDoMeio}`
}