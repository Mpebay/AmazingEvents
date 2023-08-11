const check = document.getElementById("check-up")

function crearcheck(categoria) {
    return `<div class="form-check">
                <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault1">
                <label class="form-check-label" for="flexCheckDefault1">
                ${categoria}
                </label>
            </div>`
}

function mostrarCheck(categSinRepetir, check) {
    for (const category of categSinRepetir) {
        const checkCreado = crearcheck(category)
        check.innerHTML += checkCreado
    }

}


const category = data.events.map(evento => evento.category).flat()
const set = new Set(category)
const categSinRepetir = Array.from(set)
mostrarCheck(categSinRepetir, check)



const eventos = data.events
const mainUp = document.getElementById("main-up")

function crearTarjeta(evento) {
    return `<div class="d-flex flex-wrap justify-content-center">
                <section class="card mt-3 ms-3 shadow" style="width: 18rem;">
                    <img class="img-inicio" src="${evento.image}" class="card-img-top" alt="comida">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                    </div>
                    <div class="div-precio d-flex justify-content-around pb-2">
                        <p>Price $${evento.price}</p>
                        <a href="./details.html?_id=${evento._id}" class="btn btn-primary">Details</a>
                    </div>
                </section>
        </div>`
}

function mostrarTarjeta(eventos) {
    for (const evento of eventos) {
        if (data.currentDate < evento.date) {
            const tarjetaUp = crearTarjeta(evento)
            mainUp.innerHTML += tarjetaUp
        }

    }
}
mostrarTarjeta(eventos)