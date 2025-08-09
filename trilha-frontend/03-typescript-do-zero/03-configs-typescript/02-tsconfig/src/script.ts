// Conhecendo tsconfig
// Para criar o arquivo tsconfig.json é só codar no terminal tsc --init
// Depois que ter o tsconfig criado, é só enviar tsc no terminal que ele verifica o projeto e cria os arquivos js

// Escolhendo quais arquivos compilar
// "exclude": exclui da lista de arquivos para ser lido do tsconfig
// "include": inclui um arquivo para ser lido, e ignora o resto
// Para selecionar em ambos(wioldcards):
// todos daquela pasta -> "src/*"
// qualquer nome com esse final -> "*.dev.ts"
// qualquer nome com esse final em todas as pastas -> "**/*.dev.ts"

// Target
// O target no tsconfig permite você rodar a versão do js que quiser(versão alvo=target)
// no arquivo que vai ser gerado em js, vai criar um código compativél com a versão escolhida no target

// Lib
// Permite você adicionar as blibliotecas que vai usar, por padrão ele vem comentado e com bibliotecas padrões
// Se descomentar ele não reconhecerá mais os objetos document. e console. por exemplo,
// Porque fazem parte da biblioteca do DOM.
