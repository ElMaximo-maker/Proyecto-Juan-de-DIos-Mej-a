 
let btn_postular = document.querySelectorAll('#btn_postular')

btn_postular.forEach(btn => {
    btn.addEventListener('click', () => {

        let enviar = window.confirm('¿Desea enviar sus documentos?')
        
        if(enviar){
            btn.innerText = 'Enviado'
            btn.style.background = 'green'
            
        }else{
            window.setTimeout(() => {
                window.alert('Envio cancelado')
                
            }, 1000);
        }
        
                                                                  
    })
})



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



const xhr = new XMLHttpRequest()

xhr.open('get', '../json/empleos.json', true)

xhr.onload = function(){
    if(xhr.status == 200){
        const caja_empleos = document.getElementById('empleos')
        let estructuraHTML = ''

        let empleos = JSON.parse(xhr.responseText)
        console.log(empleos)
        empleos.forEach(empleo => {
            estructuraHTML+=`
                <article class="empleo">
                    <h2>${empleo.empleo}</h2>
                    <p>${empleo.lugar}</p>
                    <div>${empleo.salario}</div>
                    <span>${empleo.afinidad}</span>
                    <button id="btn_postular">Postular Ahora</button>
                </article>`;
        })
        console.log(estructuraHTML)

        caja_empleos.innerHTML = estructuraHTML

    }
}

xhr.send()