const open = document.getElementById('opens')
const close = document.getElementById('closes')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    container.classList.add('show-nav')
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})