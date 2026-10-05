
const form_login = document.getElementById('form_login')
const form_register = document.getElementById('form_register')

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

const regexEmail = /^[a-zA-Z0-9._%$+-]{2,}@[a-zA-Z.-]{2,}\.[a-zA-Z]{2,}$/
const regexPassword = /^.{8,}$/
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


validarInput(email_login, regexEmail)
validarInput(password_login, regexPassword)



function validarInput(input, regex){

    input.addEventListener('input', () => {
        let container_input= input.closest('div')
        let valor = input.value.trim()
    
        if(regex.test(valor)){
            container_input.style.border = '1px solid blue'
            return true
        }else if(valor === ''){
            container_input.style.border = ''
            return false
        }
        else{
            container_input.style.border = '1px solid red'
            return false
        }
    
    })
}



function ValidarCampoSubmit(form){
    form.addEventListener('submit', (e) =>{
        e.preventDefault()

        let esValido = true




        let emailValido = validarFormato(email_login, regexEmail)
        let passwordValido = validarFormato(password_login, regexPassword)

        if(emailValido && passwordValido){
            esValido = true
        }else{
            esValido = false
        }



        if(esValido){
            eliminarvalor(email_login, password_login)
            window.alert('✅Conexion exitosa puedes entrar')
            location.href = '../dashboard.html'
        }
        

    })
}

ValidarCampoSubmit(form_login)
ValidarCampoSubmit(form_register)



  function validarFormato(input, regex) {
        let container_input= input.closest('div')
        const valor = input.value.trim();

        if (valor === '') {
            return false; 
        }

        if (regex.test(valor)) {
            container_input.style.border = '2px solid green';
            return true;
        } else {
            container_input.style.border = '1px solid red';
            return false;
        }
    }



// Al salir del campo solo muestra border verde si cumple el formatocorrecto

       email_login.addEventListener('blur', () => {
            validarFormato(email_login, regexEmail);
        });

        password_login.addEventListener('blur', () => {
            validarFormato(password_login, regexPassword);
        });



function eliminarvalor(...inputs){
    for(i = 0; i < inputs.length; i++ ){
        inputs.at(i).value = ''
    }
}