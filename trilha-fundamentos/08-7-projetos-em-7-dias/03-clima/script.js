document.querySelector('.busca').addEventListener('submit', async ( event ) => {
    event.preventDefault() // Previne o comportamento padrão que o formulário deveria ter

    let input = document.querySelector('#searchInput').value
    
    if( input !== '' ) {
        showWarning('Carregando...')

        // encodeURI() passa a string para o formato que deve ser passado em URLs
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=b21abbfb7c9ce184849ca5b4f3ea118d&units=metric&lang=pt_br`
        let req = await fetch(url)
        let json = await req.json()

        if( json.cod === 200 ) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        } else {
            clearInfo()
            showWarning('Não encontramos essa localização.')
        }
    } else {
        clearInfo()
    }
    
})

const showWarning = ( msg ) => document.querySelector('.aviso').innerHTML = msg
const showInfo = ( json ) => {
    showWarning('')
    
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`
    
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`
    
    document.querySelector('.resultado').style.display = 'block'
}
const clearInfo = () => {
    showWarning('')
    document.querySelector('.resultado').style.display = 'none'
}
