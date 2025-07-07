let cart = []
let modalQt = 1
let modalKey = 0

// Função que manipula DOM
const qs = msg => document.querySelector(msg)
const qsa = msg => document.querySelectorAll(msg)

// Mepear pizzaJson e clonar elementos
// selecionar elemento e passar valor que está no pizzaJson
pizzaJson.map((item, index) => {
    let pizzaItem = qs('.pizza-item').cloneNode(true)

    // Adicionar data-key nos elementos com os index
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerText = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerText = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerText = item.description
    // Selecionar e previnir evento padrão dos links, abrir modal
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()
        // pegar o data-key da pizza clicada
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalKey = key
        modalQt = 1

        // Preencher modal de acordo com o index
        qs('.pizzaInfo h1').innerText = pizzaJson[key].name
        qs('.pizzaBig img').src = pizzaJson[key].img
        qs('.pizzaInfo--desc').innerText = pizzaJson[key].description
        qs('.pizzaInfo--actualPrice').innerText = `R$ ${pizzaJson[key].price.toFixed(2)}`
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        // Preencher gramatura das pizzas
        qsa('.pizzaInfo--size').forEach((size, sizeIndex) => {
            size.querySelector('span').innerText = pizzaJson[key].sizes[sizeIndex]

            // Selecionar tamanho grande toda vez que abrir o modal
            sizeIndex === 2 ? size.classList.add('selected') : null

        })

        qs('.pizzaInfo--qt').innerText = modalQt

        qs('.pizzaWindowArea').classList.add('show')
    })

    qs('.pizza-area').append(pizzaItem)
})

// Events Modal

function closeModal() {
    qs('.pizzaWindowArea').classList.remove('show')
}

qsa('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => item.addEventListener('click', closeModal))

// Adicionar e diminuir quantidade

qs('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
        modalQt--
        qs('.pizzaInfo--qt').innerText = modalQt
    }
})
qs('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++
    qs('.pizzaInfo--qt').innerText = modalQt
})

// Selecionar tamanho

qsa('.pizzaInfo--size').forEach((e) => {
    e.addEventListener('click', () => {
        qs('.pizzaInfo--size.selected').classList.remove('selected')
        e.classList.add('selected')
    })
})

// Adicionar no carrinho

qs('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = Number(qs('.pizzaInfo--size.selected').getAttribute('data-key'))
    // Identifica os itens com Id@Tamanho
    let identifier = `${pizzaJson[modalKey].id}@${size}`
    // Retorna o index do item se tiver o mesmo identificador
    let key = cart.findIndex((item) => item.identifier == identifier)

    if (key > -1) {
        cart[key].qt++
    } else {
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size,
            qt: modalQt
        })
    }

    closeModal()
    updateCart()
})

// Evento de clique para carrinho aparecer no mobile(só abre se tiver itens no carrinho)
qs('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        qs('aside').style.left = '0vw'
    }
})
// Evento de clique para fechar o carrinho no mobile
qs('.menu-closer').addEventListener('click', () => {
    qs('aside').style.left = '100vw'
})

// Atualizar carrinho

function updateCart() {
    // Atualizar quantidade de itens no carrinho para mobile
    qs('.menu-openner span').innerText = cart.length

    if (cart.length > 0) {
        let subtotal = 0
        let desconto = 0
        let total = 0


        qs('aside').classList.add('show')
        // Limpar cart antes de mostrar
        qs('.cart').innerHTML = ''

        for (let i in cart) {
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id)
            // concatenar subtotal
            subtotal += pizzaItem.price * cart[i].qt
            // Pegar cartItem(modelo) e clonar
            let cartItem = qs('.models .cart--item').cloneNode(true)
            // Fazer pizzaSizeName
            let pizzaSizeName

            // Switch para converter o index em tamanho legivél para usuário
            switch (cart[i].size) {
                case 0:
                    pizzaSizeName = 'pequena'
                    break
                case 1:
                    pizzaSizeName = 'média'
                    break
                case 2:
                    pizzaSizeName = 'grande'
                    break
            }

            // Fazer pizzaName com nome e tamanho 
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`

            // Adicionar img
            cartItem.querySelector('img').src = pizzaItem.img
            // Adicionar pizzaName
            cartItem.querySelector('.cart--item--name').innerText = pizzaName
            // Adicionar quantidade
            cartItem.querySelector('.cart--item--qt').innerText = cart[i].qt

            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[i].qt > 1) {
                    cart[i].qt--
                } else {
                    cart.splice(i, 1)
                }
                updateCart()
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++
                updateCart()
            })

            // Adicionar cartItem como filho de .cart
            qs('.cart').appendChild(cartItem)

        }

        // Desconto e total e exibir
        desconto = subtotal * 0.1
        total = subtotal - desconto

        qs('.subtotal span:last-child').innerText = subtotal.toFixed(2)
        qs('.desconto span:last-child').innerText = desconto.toFixed(2)
        qs('.total span:last-child').innerText = total.toFixed(2)

        // Finalizar compra
        qs('.cart--finalizar').addEventListener('click', () => {
            cart = []
            qs('aside').style.left = '100vw'
            updateCart()
        })
    } else {
        qs('aside').classList.remove('show')
        // Remover para mobile também
    }
}

