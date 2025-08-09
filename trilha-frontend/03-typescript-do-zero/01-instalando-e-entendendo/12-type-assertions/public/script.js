var number1 = document.querySelector('#number1');
var number2 = document.querySelector('#number2');
var botao = document.querySelector('#calcular');
var res = document.querySelector('#result');
function calc(number1, number2) {
    return number1 + number2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calc(+number1.value, +number2.value).toString();
});
