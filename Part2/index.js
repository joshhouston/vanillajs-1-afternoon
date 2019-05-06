let idInput = document.getElementById('idInput')
let setColor = document.getElementById('colorInput')

function setCard() {
    const card = document.getElementById(idInput.value)
    card.style.color = setColor.value
    
}

function reset() {
    const tag = document.getElementsByClassName('resetC')
    tag.style.color = 'grey'
}