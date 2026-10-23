
/* Script para el manejo del carrusel de empleos*/
let btn_left = document.getElementById('btn-left')
let btn_right = document.getElementById('btn-right')

let carrusel_track = document.getElementById('track')

btn_right.addEventListener('click', () => {
    let valor = carrusel_track.style.transform.slice(11, -3)
    let suma = valor - 215

    carrusel_track.style.transform = `translateX(${suma}px)`

})

btn_left.addEventListener('click', () => {
    let valor = carrusel_track.style.transform.slice(11, -3)
    let suma = parseInt(valor) + 215

    if(valor < 0){
        carrusel_track.style.transform = `translateX(${suma}px)`
    }
})


/* Realizando la petición para rdedibir las ofertas de empleo */
const xhr = new XMLHttpRequest()

xhr.open('get', '../json/empleos.json', true)

xhr.onload = function(){
    if(xhr.status == 200){
        const caja_empleos = document.getElementById('empleos')
        let estructuraHTML = ''

        let empleos = JSON.parse(xhr.responseText)
        empleos.forEach(empleo => {
            estructuraHTML+=`
                <article class="empleo">
                    <h2>${empleo.empleo}</h2>
                    <p>${empleo.lugar}</p>
                    <div>${empleo.salario}</div>
                    <span>${empleo.afinidad}</span>
                    <button class="btn_postular">Postular Ahora</button>
                </article>`;
        })

        caja_empleos.innerHTML = estructuraHTML

    }
}

xhr.send()


/* Aqui estan los scripts del buscador de ofertas */
const buscador_oferta = document.getElementById('buscador_oferta')
const caja_buscador = document.getElementById('buscador')

let carrusel_empleos= document.getElementById('carrusel_empleos')
let empleos2 = document.getElementById('empleos2')

buscador_oferta.addEventListener('input', () => {

    caja_buscador.style.width = '100%'
    buscador_oferta.style.width = '100%'
    if(buscador_oferta.value !== ''){
        carrusel_empleos.style.display = 'none'
        empleos2.style.display = 'none'
    }else{
        carrusel_empleos.style.display = 'flex'
        empleos2.style.display = 'grid'
    }

    let busqueda = buscador_oferta.value.trim()
    let regexBuscador = new RegExp(busqueda, 'ig')
    let regexSalario = new RegExp(`^${busqueda}`)

    


    let busqueda_oferta = new XMLHttpRequest()
    
    busqueda_oferta.open('get', '../json/empleos.json', true)
    busqueda_oferta.onload = function(){
        if(busqueda_oferta.status == 200){
            const caja_empleos = document.getElementById('empleos')
            let estructuraHTML = ''

            let empleos = JSON.parse(busqueda_oferta.responseText)

            let coincidencias = empleos.filter(empleo => { // Buscando las coincidecias
                return regexBuscador.test(empleo.empleo) || regexBuscador.test(empleo.lugar) || regexSalario.test(empleo.salario)
            })

            coincidencias.forEach(coincidencia => {
                estructuraHTML+=`
                    <article class="empleo">
                        <h2>${coincidencia.empleo}</h2>
                        <p>${coincidencia.lugar}</p>
                        <div>${coincidencia.salario}</div>
                        <span>${coincidencia.afinidad}</span>
                        <button class="btn_postular">Postular Ahora</button>
                    </article>`
            })

            if(estructuraHTML !== ''){
                caja_empleos.classList.remove('busqueda_nula')
                caja_empleos.innerHTML = estructuraHTML
            }else{
                caja_empleos.classList.add('busqueda_nula')
                caja_empleos.textContent = 'No se encuentró el recurso solicitado escriba diferente o es posible que no este disponible'
            }


        }
    }
    busqueda_oferta.send()

})


/* Animación de postulación de empleo */
const caja_empleos = document.getElementById('empleos')

caja_empleos.addEventListener('click', (e) => {
    if(e.target && e.target.classList.contains('btn_postular')){
        const btn = e.target
        let enviar = window.confirm('¿Desea enviar sus documentos?')
        
        if(enviar){
            btn.innerText = 'Enviado'
            btn.style.background = 'green'
            
        }else{
            window.setTimeout(() => {
                window.alert('Envio cancelado')
                
            }, 1000);
        }
    }
})
