
const container = document.getElementById('container')
let btn_w_register = document.getElementById('btn-w-register')
let btn_w_login = document.getElementById('btn-w-login')

let btn_login = document.getElementById("btn-login")
let btn_register = document.getElementById("btn-register")

btn_w_register.addEventListener('click', () => {
    container.classList.toggle('activo')
    document.title = 'Register'
})
btn_w_login.addEventListener('click', () => {
    container.classList.toggle('activo')
    document.title = 'Login'
})


btn_login.addEventListener('click', (e) => {
    e.preventDefault()
    location.href = '../dashboard.html'
})
btn_register.addEventListener('click', (e) => {
    e.preventDefault()
    container.classList.remove('activo')
})