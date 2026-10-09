

const nombre = document.getElementById('nombre')
const age = document.getElementById('age')
const tel = document.getElementById('tel')
const email = document.getElementById('email')
const house = document.getElementById('house')
const carrer = document.getElementById('carrer')


const nombre_modal = document.getElementById('nombre_modal')
const age_modal = document.getElementById('age_modal')
const tel_modal = document.getElementById('tel_modal')
const email_modal = document.getElementById('email_modal')
const house_modal = document.getElementById('house_modal')
const carrer_modal = document.getElementById('carrer_modal')



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

btn_guardar_modal.addEventListener('click', () => {
    modal.style.display = 'none'
})