let contenedorDetails = document.getElementById("contenedor-details")
console.log(data.events)
const parametros = location.search
console.log(parametros)

const objetosUrl = new URLSearchParams(parametros)
const idCarta = objetosUrl.get("_id")
console.log(parametros)

const objetoCarta = data.events.find(objetoCarta => objetoCarta._id === idCarta)



function crearTarjeta(objeto) {
    return `<div class="d-flex flex-wrap justify-content-center">
                <section class="card mt-3 ms-3 shadow" style="width: 18rem;">
                    <img class="img-inicio" src="${objeto.image}" class="card-img-top" alt="comida">
                    <div class="card-body">
                        <h5 class="card-title">${objeto.name}</h5>
                        <p class="card-text">"${objeto.description}"</p>
                    </div>
                    <div class="div-precio d-flex flex-column justify-content-around pb-2">
                        <p>Date: ${objeto.date}</p>
                        <p>Price $${objeto.price}</p>
                        <p>Place: ${objeto.place}</p>
                        <p>Category: ${objeto.category}</P>
                    </div>
                </section>
            </div>`
}

let estructuraHtml = crearTarjeta(objetoCarta)

function renderTarjeta(tarjeta, contenedor){
    contenedor.innerHTML = tarjeta
}

renderTarjeta(estructuraHtml, contenedorDetails)

