const input = document.querySelector('.login_input')
const buttom = document.querySelector('.login_buttom')
const form = document.querySelector('.login-form')

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        buttom.removeAttribute('disabled')
    }else{
        buttom.setAttribute('disabled', '')
    }
}

const handleSubmit = () => {
    event.preventDefault()
    localStorage.setItem('player', input.value)
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)