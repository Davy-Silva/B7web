//  A data começa a contar a partir da Época Unix(1 de janeiro de 1970)

let d = new Date('2020-01-01 15:42:16') // Paramêtros -> ano, mês(começa do zero), dia, hora, minutos, secundos, milessimos
// Ou usa dataString que se faz assim: '2020-01-01 15:42:16'

console.log( d ) // Monstra todas as informações da data
console.log( d.toDateString ) // Monstra a data mais resumida 
console.log( d.toUTCString ) // Monstra a data mais resumida e no fuso hórario GMT
console.log( d ) // 

let d1 = new Date(234234234234) // Só um paramêtro vai significar o milisegundos depois da Época Unix
let d2 = new Date(-234234234234) // Só um paramêtro negativo vai significar o milisegundos antes da Época Unix
let d3 = Date.now() // Retorna o hórario atual sem precisar criar um objeto, variável etc

let d4 = new Date()

let newValor = d.getFullYear() // Pega só o ano
let newValor1 = d.getMonth() // Pega só o mês
let newValor2 = d.getDay() // Pega só o dia da semana(de 0 a 6)
let newValor3 = d.getDate() // Pega o dia atual
let newValor4 = d.getHours() // Pega a hora
let newValor5 = d.getMinutes() // Pega os minutos
let newValor6 = d.getSeconds() // Pega os segundos
let newValor7 = d.getMilliseconds() // Pega os milisegundos
let newValor8 = d.getTime() // A quantidade de milegundos de Época Unix até agora

d4.setFullYear(2020) // Troca o ano
d4.setMonth(10) // Troca o mês
d4.setDate(4) // Troca o dia
d4.setDate( d4.getDate() + 5 ) // Para aumentar ou diminuir os dias atuais
d4.setHours( d4.setHours() + 5 ) // Setar hora
