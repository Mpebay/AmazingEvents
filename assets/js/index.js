const check = document.getElementById("check");
const formBusqueda = document.getElementById("form-busqueda");
const main = document.getElementById("main");
const input = document.getElementById("texto-barra-busqueda");
const events = data.events;

function crearcheck(category) {
  return `<div class="form-check">
                <input class="form-check-input ms-3" type="checkbox" value="${category}" id="flexCheckDefault1">
                <label class="form-check-label" for="flexCheckDefault1">${category}</label>
            </div>`;
}

const categoriasSinRepetir = Array.from(
  new Set(data.events.map((evento) => evento.category))
);

function mostrarCheck(categoriasSinRepetir, check) {
  for (const evento of categoriasSinRepetir) {
    const checkCreado = crearcheck(evento);
    check.innerHTML += checkCreado;
  }
}
mostrarCheck(categoriasSinRepetir, check);

function filtrarPorCategoria(arrayEvents) {
    const checkboxesSeleccionados = document.querySelectorAll(
        "input[type=checkbox]:checked"
    );
    const valoresCheckbox = Array.from(checkboxesSeleccionados).map(
        (input) => input.value
    );
    
    const filtrados = arrayEvents.filter((evento) =>
        valoresCheckbox.includes(evento.category)
    );
    return filtrados;
}

function filtrarPorNombre() {
  const filtrado = events.filter((evento) =>
    evento.name.toLowerCase().includes(input.value.toLowerCase())
  );
  return filtrado;
}

const contenedor = document.getElementById("main");

function crearTarjeta(evento) {
  return `<div class="d-flex flex-wrap justify-content-center">
                    <section class="card mt-3 ms-3 shadow" style="width: 18rem;">
                        <img class="img-inicio" src="${evento.image}" class="card-img-top" alt="comida">
                        <div class="card-body">
                            <h5 class="card-title">${evento.name}</h5>
                            <p class="card-text">"${evento.description}"</p>
                        </div>
                        <div class="div-precio d-flex justify-content-around pb-2">
                            <p>Price $${evento.price}</p>
                            <a href="./assets/pages/details.html?_id=${evento._id}" class="btn btn-primary">Details</a>
                        </div>
                    </section>
                </div>`;
}

function mostrarTarjeta(listaEventos, main) {
  main.innerHTML = "";
  for (const evento of listaEventos) {
    const tarjetaCreada = crearTarjeta(evento);
    main.innerHTML += tarjetaCreada;
  }
}
mostrarTarjeta(data.events, contenedor);

input.addEventListener("input", (mostrarTarjeta) => {
  const filtradoPorNombre = filtrarPorNombre(events, input.value);
  let filtradoPorCategoria = filtrarPorCategoria(filtradoPorNombre);
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
});

check.addEventListener("change", () => {
    const filtradoPorNombre = filtrarPorNombre(events, input.value);
    let filtradoPorCategoria = filtrarPorCategoria(filtradoPorNombre);
    condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
});
function condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria) {
    if (filtradoPorNombre.length === data.events.length && filtradoPorCategoria.length === 0){
        mostrarTarjeta(events, contenedor)
        return
    }

    if (filtradoPorNombre.length !== data.events.length && filtradoPorCategoria.length === 0){
        mostrarTarjeta(filtradoPorNombre, contenedor)
        return}


    if (filtradoPorCategoria.length !== 0 && filtradoPorNombre.length === data.events.length){
        mostrarTarjeta(filtradoPorCategoria, contenedor)
        return
    }

    if (filtradoPorNombre.length !== data.events.length && filtradoPorCategoria.length !== 0){
        mostrarTarjeta(filtradoPorCategoria, contenedor)
    }
}