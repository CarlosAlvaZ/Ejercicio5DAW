const nombre = document.querySelector('#nombre')
const fecha = document.querySelector('#fecha')
const imagen = document.querySelector('#imagen')
const enviar = document.querySelector('.enviar')
const alert = document.querySelector('.alert')
const continuar = document.querySelector('.continuar')
const visualizar = document.querySelector('.visualizar')

function validar(){
    return (nombre.value != '') && (fecha.value != '' && imagen.value != '')
}

function enviarDatos(){
    fetch('https://server-guia9-daw.herokuapp.com/ciudades')
                .then(res=>res.json())
                .then(data=>{
                    let currentId = data.length
                    let userData = {
                        id: currentId + 1,
                        nombre: nombre.value,
                        fecha: fecha.value,
                        imagen: imagen.value
                    }

                    fetch('https://server-guia9-daw.herokuapp.com/ciudades', {
                        method: 'POST',
                        headers: {
                            "Content-type" : "application/json"
                        },
                        body: JSON.stringify(userData)
                    }).then(res=>{
                        console.log('Success')
                    })
                    .catch(res=>console.log('Error', res))
                }).catch(res=>console.log('Error', res))
}

function limpiar(){
    nombre.value = ''
    fecha.value = ''
    imagen.value = ''
}

enviar.addEventListener('click', (e)=>{
    if(validar()){
        enviarDatos()
        alert.classList.remove('hidden')
    } else {
        return
    }
})

continuar.addEventListener('click', (e)=>{
    limpiar()
    alert.classList.add('hidden')
})

visualizar.addEventListener('click', (e)=>{
    window.location.assign('./visualizar.html')
})