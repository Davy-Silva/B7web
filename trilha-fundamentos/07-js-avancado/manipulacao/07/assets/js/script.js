let timer

function comecar() {
    timer = setInterval(showTime, 1000) // A função que quer executar e o intervalo para executar
}

function parar() {
    clearInterval(timer) // Limpa o intevalo, pausando
}

function showTime() {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    
    let txt = `${h}:${m}:${s}`
    
    document.querySelector(".demo").innerHTML = txt
}

// Aula 2

let timer1 = setTimeout(function() { // Ao se passar 2 segundos ele executa a função
    alert(rodou)
}, 2000)

clearTimeout(timer1) // Consegue para o setTimeout antes dele terminar
