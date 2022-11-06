const ciudades = document.querySelector('.ciudades')
const libros = document.querySelector('.libros')

window.addEventListener('load', (e)=>{

    fetch('https://server-guia9-daw.herokuapp.com/ciudades')
        .then(res=>res.json())
        .then(data=>{
            data.forEach(element => {
                ciudades.innerHTML += `<tr>
                <th scope="row">${element.id}</th>
                <td>${element.nombre}</td>
                <td>${element.fecha}</td>
                <td>${element.imagen}</td>
              </tr>`
            });
        }).catch(error=>console.log('Error', error))

    fetch('https://server-guia9-daw.herokuapp.com/libros')
        .then(res=>res.json())
        .then(data=>{
            data.forEach(element => {
                libros.innerHTML += `<tr>
                <th scope="row">${element.id}</th>
                <td>${element.nombre}</td>
                <td>${element.fecha}</td>
                <td>${element.imagen}</td>
              </tr>`
            });
        }).catch(error=>console.log('Error', error))
})