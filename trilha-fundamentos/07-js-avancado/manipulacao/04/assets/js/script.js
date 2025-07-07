let lista = [45, 4, 9, 16, 25]
let lista2 = []


lista2 = lista.map( function(item) { // Map vai "mapear", vai rodar a função em todos os itens do Array
    return item * 2
})

lista2 = lista.filter( function(item) { // o .filter vai rodar uma função que retorna true ou false, se for true aproveita o item, se não, não
    return item < 20
})

lista2 = lista.every( function(item) { // .every verifica se todos os itens retornam true, se todos os itens retornarem true ela retorna true, se algum retornar false, ela retorna false(Semenlhante ao operador lógico && 'AND')
    return item > 20
})

lista2 = lista.some( function(item) { // .some retorna true se pelo menos um item do array retornar true(Semenlhante ao operador lógico || 'OR')
    return item > 20
})

lista2 = lista.find( function(item) { // Retorna o item que ele achar que satisfaça as condições(true)
    return item == 16
})

lista2 = lista.findIndex( function(item) { // Retorna o index do item que ele achar que satisfaça as condições(true)
    return item == 16
})

let res = lista2
