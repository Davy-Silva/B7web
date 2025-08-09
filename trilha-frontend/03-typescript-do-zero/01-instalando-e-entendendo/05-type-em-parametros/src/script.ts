// Às vezes é necessário dizer o tipo de parâmetro que aquela função deve receber
function firstLetterUpperCase(name: string) {
    let firstLetter = name.charAt(0).toUpperCase()
    return `${firstLetter}${name.substring(1)}`
}

firstLetterUpperCase('davy')
