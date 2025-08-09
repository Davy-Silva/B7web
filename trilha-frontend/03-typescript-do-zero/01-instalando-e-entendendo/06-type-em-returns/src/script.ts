// Também é possível definir o type do retorno, deixando a entrada e saída da função controlada
function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase()
    return `${firstLetter}${name.substring(1)}`
}

firstLetterUpperCase('davy')

