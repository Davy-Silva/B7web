// Initial Data


// Variável com a questão atual, currentQuestion
let currentQuestion = 0
// Variével que guarda as respostas corretas, correctAnswers
let correctAnswer = 0

showQuestion()

// Events


// Evento do button que executa resetEvent()
document.querySelector('.scoreArea button').addEventListener('click', resetEvent)

// Functions


// Função que mostra as questões, showQuestion()
// se a question[currentQuestion] existir, esconda .scoreArea e exiba .questionArea
// também inserir conteúdo no .question e .options(lembre que manipular o DOM causa um bom processamento, altere o minimo possível)
// depois que inserir o conteúdo na tela, da um loop em cada um é adiciona um evento de click(optionClickEvent)
// Variável que pega porcentagem arredondada da questão atual para a barra, pct
// Passa porcentagem para a barra no html
// se question[currentQuestion] não existir, execute finishQuiz()
function showQuestion() {
    if(questions[currentQuestion]) {

        let pct = Math.floor((currentQuestion / questions.length) * 100)
        document.querySelector('.progress--bar').style.width = `${pct}%`

        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'
        
        let q = questions[currentQuestion]
        let optionsHtml = ''
        
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${Number(i) + 1}</span>${q.options[i]}</div>`
        }
        
        document.querySelector('.question').innerHTML = q.question
        document.querySelector('.options').innerHTML = optionsHtml
        
        document.querySelectorAll('.option').forEach( (item) => {
            item.addEventListener('click', optionClickEvent)
        })
        
    } else {
        finishQuiz()
    }
}

// Função que pega o evento de click, optionClickEvent( e )
// pega e guarda o atributo data-op em uma variável, clickedOption
// se question[currentQuestion].answer for igual a clickedOption incrementa correctAnswer
// depois incrementa o currentQuestion e executa showQuestion()
function optionClickEvent( e ) {
    let clickedOption = e.target.getAttribute('data-op')
    let answer = questions[currentQuestion].answer
    
    if( answer === Number(clickedOption) ) {
        correctAnswer++
    }
    
    currentQuestion++
    showQuestion()
}

// Função que termina o quiz, finishQuiz()
// Variável que calcula os pontos arredondados e exibe em .scorePct, points
// se points for menor que 30, frase ta ruim e style vermelho
// se points for menor que 70 e maior que 30, frase muito bom e style amarelo
// se points for maior que 70, frase parabéns e style verde
// exibe números de questões e quantas acertou
// exibe .scoreArea e esconde .questionArea
// coloca porcentagem da barra para 100%
function finishQuiz() {
    let points = Math.floor((correctAnswer / questions.length) * 100)
    
    if(points <= 30) {
        document.querySelector('.scoreText1').innerHTML = `Tá ruim em`
        document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
        document.querySelector('.scorePct').style.color = 'red'
    } else if (points <= 70) {
        document.querySelector('.scoreText1').innerHTML = `Muito bom!`
        document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
        document.querySelector('.scorePct').style.color = 'yellow'
    } else if (points > 70) {
        document.querySelector('.scoreText1').innerHTML = `Parabéns!`
        document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
        document.querySelector('.scorePct').style.color = 'green'
    }
    
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`
    
    document.querySelector('.scoreArea').style.display = 'block'
    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.progress--bar').style.width = `100%`
}

// Função que reseta o quiz, resetEvent()
// Zera tudo e executa showQuestion()
function resetEvent() {
    currentQuestion = 0
    correctAnswer = 0

    showQuestion()
}
