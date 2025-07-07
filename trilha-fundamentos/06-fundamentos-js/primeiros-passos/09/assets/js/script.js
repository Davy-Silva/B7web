let profession = "programador"

// Switch verifica o valor de uma variável em cada case e executa um bloco de código correspondente
// o break interrompe a execução do switch após o case correspondente ser encontrado

switch (profession) {
    case 'programador':
        console.log('Sua camisa será VERDE')
        break
    case 'designer':
        console.log('Sua camisa será VERMELHO')
        break
    case 'gerente':
        console.log('Sua camisa será AZUL') 
        break
    defalt:
        console.log('Sua camisa será PRETA')
        break
}