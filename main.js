const passwordInput = document.getElementById('passwordInput')
const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', function() {
    const isPassword = passwordInput.type === 'password'
    passwordInput.type = isPassword ? 'text' : 'password'

    toggle.src = isPassword ? 'img/icons8-eye-50.png' : 'img/icons8-closed-eye-50.png'
})