// O Typescript entende o código e determina os types, sem que você defina 
let names = ['Davy', 'Rihana', 90]

// No exemplo de baixo da erro, pois ele identificou que tem strings e numbers no Array
// names.forEach( function(name) {
//     console.log(name.toUpperCase())
// })

// No exemplo abaixo tem uma verificação, ele define que +
names.forEach( function(name) {
    if(typeof name === 'string') {
        // o type de name aqui é string +
        console.log(name.toUpperCase())
    } else {
        // e aqui é number(pois só tem string e number no Array)
        console.log(name)
    }
})
