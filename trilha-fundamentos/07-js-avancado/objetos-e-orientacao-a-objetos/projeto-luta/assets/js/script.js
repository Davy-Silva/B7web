let log = new Log(document.querySelector('.log'))

let char = new Knight('Levi')
let monster = new BigMonster('Jordan')

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()
