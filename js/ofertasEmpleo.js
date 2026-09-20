
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



