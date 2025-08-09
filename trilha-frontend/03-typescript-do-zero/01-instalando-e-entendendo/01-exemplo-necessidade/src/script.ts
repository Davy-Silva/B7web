const number1 = document.querySelector('#number1') as HTMLInputElement
const number2 = document.querySelector('#number2') as HTMLInputElement
const botao = document.querySelector('#calcular') as HTMLButtonElement
const res = document.querySelector('#result') as HTMLDivElement

function calc(number1: number, number2: number) {
    return number1 + number2
}

botao.addEventListener('click', () => {
    res.innerHTML = calc(+number1.value, +number2.value).toString()
})