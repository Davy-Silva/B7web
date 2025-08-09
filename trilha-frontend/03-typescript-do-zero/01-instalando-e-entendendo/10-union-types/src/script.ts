// Caso seja necessário que uma variável tenha dois tipos, se faz assim
let age: string | number = 90
age = '90' // Não da erro, pois está dentro dos críterios

// Em funções, você é obrigado a fazer uma condicional se a variável poder ter mais de um tipo, caso tiver problema quando ela não for a esperada
function mostrarIdade(idade: number | string) {
    if(typeof idade === 'string') {
        console.log(idade.toUpperCase())
    } else {
        console.log(idade)
    }
}

mostrarIdade('17')
