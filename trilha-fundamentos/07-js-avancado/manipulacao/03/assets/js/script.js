let lista = ['Ovo', 'Farinha', 'Leite', 'Feijão']

let res = lista.toString() // Tranforma o Array todo em uma string, colocando os itens separados por vírgulas
let res1 = lista.join( '-' ) // Transforma o Array todo em uma string separando os itens pelo paramêtro escolhido
let res2 = lista.indexOf( 'Farinha' ) // Diz o index do item que estiver procurando com o paramêtro, se não acha = -1
lista.pop() // Remove o ultimo item do array
lista.shift() // Remove o primeiro item do array
lista.push( 'Feijão' ) // Adiciona um novo item no final do array
lista[0] = 'Farinhas' // Seleciona o item pelo index, possibilitando alterar seu valor
lista[ lista.length ] =  'Arroz' // Seleciona um item a mais do que o array tem(que não existe, portanto ele cria), dando para adicionar um novo item assim

let lista2 = ['Ovo', 'Farinha', 'Leite', 'Feijão']
let listaDeCarros = ['Motor', 'Gasolina', 'Rodas', 'Escapamento']

let resu = lista2.splice( 1, 1 ) // Primeiro paramêtro é o item que você quer remover, o segundo paramêtro é quantos itens você quer remover. se tiver só um paramêtro ele vai remover tudo a partir daquele
let resu1 = lista2.concat( listaDeCarros ) // Juntando dois arrays em um
lista2.sort() // Coloca o Array em ordem alfabetica
lista2.reverse() // Inverte a ordem do Array(Usado junto com .sort() faz a ordem alfabetica ao contraio)