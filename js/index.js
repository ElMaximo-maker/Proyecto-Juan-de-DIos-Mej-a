
document.addEventListener('DOMContentLoaded', () => {

    let nav = document.getElementById('nav')

    let barra_menus = document.getElementById('barra-menus').addEventListener('click', () => {
        nav.classList.toggle('desplegar')
    })


    document.addEventListener('click', (e) => {
        let button = e.target.classList.contains('barra-menus')
        if(!button){
           nav.classList.remove('desplegar')
        }
    })


})