let totalSlider = document.querySelectorAll('.slider-item').length
let sliderWidth = document.querySelector('.slider-width')
let currentSlider = 0

document.querySelector('.slider-width').style.width = `${100 * totalSlider}vw`

function voltaSlide() {
    currentSlider--
    currentSlider < 0 ? currentSlider = (totalSlider - 1) : null

    updateMargin()
}

function proximoSlide() {
    currentSlider++
    currentSlider > (totalSlider - 1) ? currentSlider = 0 : null

    updateMargin()
}

function updateMargin() {
    sliderWidth.style.marginLeft = `-${currentSlider * 100}vw`
}

setInterval(proximoSlide, 5000)
