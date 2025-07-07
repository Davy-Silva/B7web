let idade = 50

if ( idade >= 18 && idade <= 60 ) { // && -> e
    console.log("Você é um adulto") // Só é executado se as duas condições forem verdadeiras
}

if ( idade >= 18 || idade <= 60 ) { // || -> ou
    console.log("Você é um adulto") // Só é executado se uma das condições forem verdadeiras
}