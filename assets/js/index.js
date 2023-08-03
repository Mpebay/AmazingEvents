
const contenedor = document.getElementById("main")


function crearTarjeta(evento){
    return `<div class="d-flex flex-wrap justify-content-center">
                <section class="card mt-3 ms-3 shadow" style="width: 18rem;">
                    <img class="img-inicio" src="${evento.image}" class="card-img-top" alt="comida">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">"${evento.description}"</p>
                    </div>
                    <div class="div-precio d-flex justify-content-around pb-2">
                        <p>Price ${evento.price}</p>
                        <a href="./assets/pages/details.html" class="btn btn-primary">Details</a>
                    </div>
                </section>
            </div>`
}


function mostrarTarjeta(listaEventos, contenedor){
    for (const evento of listaEventos){
        const tarjetaCreada = crearTarjeta(evento)
        contenedor.innerHTML += tarjetaCreada
    }

}
mostrarTarjeta(data.events, contenedor)

