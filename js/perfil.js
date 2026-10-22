
const form_perfil = document.getElementById('form_perfil')
let nombre = document.getElementById('name')
let age = document.getElementById('age')
let tel = document.getElementById('tel')
let email = document.getElementById('email')
let house = document.getElementById('house')
let carrer = document.getElementById('career')


let nombre_modal = document.getElementById('nombre_modal')
let age_modal = document.getElementById('age_modal')
let tel_modal = document.getElementById('tel_modal')
let email_modal = document.getElementById('email_modal')
let house_modal = document.getElementById('house_modal')
let carrer_modal = document.getElementById('carrer_modal')


 
const btn_editar_perfil = document.getElementById('btn_editar_perfil')
const modal = document.getElementById('modal')
const btn_guardar_modal = document.getElementById('btn_guardar_modal')
const btn_cancelar_modal = document.getElementById('btn_cancelar_modal')

btn_editar_perfil.addEventListener('click', () => {
    modal.style.display = 'flex'
})

btn_cancelar_modal.addEventListener('click', () => {
    modal.style.display = 'none'
})

btn_guardar_modal.addEventListener('click', (e) => {
    e.preventDefault()
    guardar_cambios(nombre_modal, nombre)
    guardar_cambios(age_modal, age)
    guardar_cambios(tel_modal, tel)
    guardar_cambios(email_modal, email)
    guardar_cambios(house_modal, house)
    guardar_cambios(carrer_modal, carrer)
    modal.style.display = 'none'
})

function guardar_cambios(nuevoValor, elemento){
    elemento.textContent = nuevoValor.value
}

