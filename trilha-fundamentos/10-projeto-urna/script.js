// Functions base
const qs = msg => document.querySelector(msg)
const qsa = msg => document.querySelectorAll(msg)

// Variáveis
let seuVotoPara = qs('.d-1-1 span')
let cargo = qs('.d-1-2 span')
let descricao = qs('.d-1-4')
let aviso = qs('.d-2')
let lateral = qs('.d-1-right')
let numeros = qs('.d-1-3')

// Variáveis controle de ambiente
let etapaAtual = 0
let number = ''
let etapa = etapas[etapaAtual]
let votoBranco = false
let votoConfirmado = false
let votos = []

// Functions
function comecarEtapa() {
    number = ''
    
    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = ''
    
    // Adiciona o primero elemento com a classe .pisca para que possa digitar
    // os próximos adiciona conforme o necessário em etapa.numeros
    for(let i = 0; i < etapa.numeros; i++) {
        if(i === 0) {
            numeros.innerHTML += '<div class="numero pisca"></div>'
        } else {
            numeros.innerHTML += '<div class="numero"></div>'
        }
        
    }
    
}

// Atualizainfterface
function atualizaInterface() {
    let candidato = etapa.candidatos.find((item) => item.numero === number ? true : false )
    
    if(candidato) {
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}<br/> Partido: ${candidato.partido}`
        
        for(let i in candidato.fotos) {
            if(candidato.fotos[i].small === true) {
                lateral.innerHTML += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
            } else {
                lateral.innerHTML += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
            }
        }
        
    } else {
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = '<span class="pisca aviso--grande">VOTO NULO</span>'
    }
    
}

// Events
function clicou(n) {
    let numberClickable = qs('.numero.pisca')
    
    // Se tiver algum El .pisca coloca o número clicado nele, atualiza number
    // remove a classe .pisca dele e adiciona .pisca no próximo El se tiver
    if(numberClickable !== null) {
        numberClickable.innerHTML = n
        number += n
        numberClickable.classList.remove('pisca')
        numberClickable.nextElementSibling ? numberClickable.nextElementSibling.classList.add('pisca') : atualizaInterface()
    }
}
function branco() {
    let numberClickable = qs('.numero.pisca')
    
    if(number === '') {
        votoBranco = true
        
        seuVotoPara.style.display = 'block'
        numeros.innerHTML = ''
        aviso.style.display = 'block'
        descricao.innerHTML = '<span class="pisca aviso--grande">VOTO EM BRANCO</span>'
        numberClickable.classList.remove('pisca')
    } else {
        alert('Para votar branco, não pode ter números digitados')
    }
}
function corrige() {
    comecarEtapa()
}
function confirma() {
    
    if(votoBranco) {
        votoConfirmado = true
        votos.push({
            etapa: etapa.titulo,
            voto: 'branco'
        })
    } else if (number.length === etapa.numeros) {
        votoConfirmado = true
        votos.push({
            etapa: etapa.titulo,
            voto: number
        })
    }

    if(votoConfirmado) {
        somConfirma.currentTime = 0
        somConfirma.volume = 0.4
        somConfirma.play()

        etapaAtual++
        etapa = etapas[etapaAtual]

        if(etapa !== undefined) {
            comecarEtapa()
        } else {
            qs('.tela').innerHTML = '<span class="pisca aviso--gigante">FIM</span>'
            console.log(votos)
        }
    }
}

// Som do botão
const somTecla = qs('#tecla-som')

qsa('.teclado--botao').forEach((botao) => {
    botao.addEventListener('click', () => {
        somTecla.currentTime = 0
        somTecla.play()
    })
});

const somConfirma = qs('#confirma-som')

comecarEtapa()
