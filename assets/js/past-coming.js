
const eventos = data.events
const mainPast = document.getElementById("main-past")

function crearTarjeta(evento) {
    return `<div class="d-flex flex-wrap justify-content-center">
                <section class="card mt-3 ms-3 shadow" style="width: 18rem;">
                    <img class="img-inicio" src="${evento.image}" class="card-img-top" alt="comida">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                    </div>
                    <div class="div-precio d-flex justify-content-around pb-2">
                        <p>Price ${evento.price}</p>
                        <a href="./details.html" class="btn btn-primary">Details</a>
                    </div>
                </section>
        </div>`
}

function mostrarTarjeta(eventos) {
    for (const evento of eventos) {
        if (data.currentDate > evento.date) {
            const tarjetaPast = crearTarjeta(evento)
            mainPast.innerHTML += tarjetaPast
        }

    }
}
mostrarTarjeta(eventos)