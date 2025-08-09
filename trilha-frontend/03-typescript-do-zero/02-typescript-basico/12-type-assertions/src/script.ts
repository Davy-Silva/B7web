// Ás vezes é necessário dar uma assitência para o typescript entender do que se trata
let idadeField = document.querySelector('#idade') as HTMLInputElement

// .value só existe em input, não em elementos normais do HTML
// Se você não especificar que é um elemento input ele apontará um erro
console.log(idadeField.value)
