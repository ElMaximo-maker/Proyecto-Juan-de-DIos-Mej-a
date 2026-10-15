 
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
