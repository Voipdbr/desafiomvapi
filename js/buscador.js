const div = document.querySelector('.buscador')
const boton = document.querySelector('.icono')

boton.addEventListener('click', () => {

    /*if (div.classList.contains('mostrar')) {
        div.classList.remove('mostrar')
    } else {
        div.classList.add('mostrar')
    }*/
    div.classList.toggle('mostrar')
})
