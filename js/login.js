
const container = document.getElementById('container')
const btn_w_register = document.getElementById('btn-w-register')
const btn_w_login = document.getElementById('btn-w-login')

const btn_login = document.getElementById("btn-login")
const btn_register = document.getElementById("btn-register")

/* Variables de los input  y regex */

const email_login = document.getElementById('email-login')
const password_login = document.getElementById('password-login')

const user_type = document.getElementById('user-type')
const user_name = document.getElementById('user-name')
const email_register = document.getElementById('email-register')
const password_register = document.getElementById('password-register')
const tel = document.getElementById('tel')

const regexEmail = /^[a-zA-Z0-9áéíóúÁÉÍÓÚ.-_%$]{5,}@[a-zA-Z]{3,}\.[a-z]{2,}$/
const regexPassword = /^[a-zA-Z0-9áéíóúÁÉÍÓÚ$_%#*.+-]{8,}$/
const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{3,}$/
const regexTel = /^(222|555)?[\s-]?[0-9]{2}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/



/* Aqui estan los scripts de los botones de el portal de saludo */

btn_w_register.addEventListener('click', () => {
    container.classList.toggle('activo')
    document.title = 'Register'
})
btn_w_login.addEventListener('click', () => {
    container.classList.toggle('activo')
    document.title = 'Login'
})


btn_register.addEventListener('click', (e) => {
    e.preventDefault()
    container.classList.remove('activo')
})


email_login.addEventListener('input', () => {
    let container_input= email_login.closest('div')
    let valor = email_login.value.trim()

    
    if(regexEmail.test(valor)){
        container_input.style.border = '1px solid blue'
    }else if(valor === ''){
        container_input.style.border = ''
    }
    else{
        container_input.style.border = '1px solid red'
    }
})