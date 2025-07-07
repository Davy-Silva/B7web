// Selecionando elemento do HTML
let relogioDigital = document.querySelector('.digital')
let segundosPonteiro = document.querySelector('.p_s')
let minutosPonteiro = document.querySelector('.p_m')
let horasPonteiro = document.querySelector('.p_h')


function updateClock() {
    // Pega Object Date
    let data = new Date()

    // Variáveis vindas do Date
    let segundos = data.getSeconds()
    let minutos = data.getMinutes()
    let horas24 = data.getHours()
    let horas12 = horas24 % 12 // formato 12h
    
    // Calculando os graus equivalente ao tempo
    let segundosDeg = segundos * 6 // segundos * 360 / 60
    let minutosDeg = (minutos * 6) + (segundos * 0.1) // minutos * 360 / 60 + segundos * 6/60
    let horasDeg = horas12 * 30 + minutos * 0.5 // 12 horas * 360 / 12 + minutos * 30 / 60

    // Passando os graus para os elementos
    segundosPonteiro.style.transform = `rotate(${segundosDeg - 90}deg)` // - 90 é para compensar a posição 0 do CSS
    minutosPonteiro.style.transform = `rotate(${minutosDeg - 90}deg)`
    horasPonteiro.style.transform = `rotate(${horasDeg - 90}deg)`

    // Passando a string para o html
    relogioDigital.innerHTML = `${String(horas24).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
}

setInterval(updateClock, 1000)
updateClock()
