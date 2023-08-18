export function crearcheck(category) {
    return `<div class="form-check">
                  <input class="form-check-input ms-3" type="checkbox" value="${category}" id="flexCheckDefault1">
                  <label class="form-check-label" for="flexCheckDefault1">${category}</label>
              </div>`;
  }
  
export function mostrarCheck(categoriasSinRepetir, check) {
    for (const evento of categoriasSinRepetir) {
      const checkCreado = crearcheck(evento);
      check.innerHTML += checkCreado;
    }
  }

export function crearTarjeta(evento) {
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
export function mostrarTarjeta(listaEventos, main) {
    main.innerHTML = "";
    for (const evento of listaEventos) {
      const tarjetaCreada = crearTarjeta(evento);
      main.innerHTML += tarjetaCreada;
    }
  }

export function mostrarTarjetaPastUp(listaEventos, main) {
    main.innerHTML = "";
    for (const evento of listaEventos) {
      const tarjetaCreada = crearTarjetaPastUp(evento);
      main.innerHTML += tarjetaCreada;
    }
  }
  
export function filtrarPorCategoria(arrayEvents) {
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
  
export function filtrarPorNombre(array, valor) {
    const filtrado = array.filter((evento) => evento.name.toLowerCase().includes(valor.toLowerCase()));
    return filtrado;
  }

export function condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, events, contenedor) {
    if (filtradoPorNombre.length === events.length && filtradoPorCategoria.length === 0){
        mostrarTarjeta(events, contenedor)
        return
    }

    if (filtradoPorNombre.length !== events.length && filtradoPorCategoria.length === 0){
        mostrarTarjeta(filtradoPorNombre, contenedor)
        return
      }


    if ((filtradoPorCategoria.length !== 0 && filtradoPorNombre.length === events.length)||(filtradoPorNombre.length !== events.length && filtradoPorCategoria.length !== 0)){
        mostrarTarjeta(filtradoPorCategoria, contenedor)
        return
    }
  }

export function filtrarEventos(eventos, fecha) {
    const eventosFiltrados = [];
    for (const evento of eventos) {
      if (evento.date < fecha) {
        eventosFiltrados.push(evento)
      }
    }
    return eventosFiltrados
  }

export function filtrarCheckbox(arrayEvents) {
    const checkboxSeleccionados = document.querySelectorAll('input[type=checkbox]:checked')
    const valoresCheckbox = Array.from(checkboxSeleccionados).map((input) => input.value)
    const filtrado = arrayEvents.filter((evento) => valoresCheckbox.includes(evento.category))
  
    return filtrado
  }

export function filtrarEventos1(eventos, fecha) {
    const eventosFiltrados = [];
    for (const evento of eventos) {
      if (evento.date > fecha) {
        eventosFiltrados.push(evento)
      }
    }
    return eventosFiltrados
  }

export function renderTarjeta(tarjeta, contenedor) {
    contenedor.innerHTML = tarjeta
}


export function crearTarjetaDetails(objeto) {
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
                        <p>${objeto.assistance?(`Assistance: ${objeto.assistance}`):(`Estimate: ${objeto.estimate}`)}</p>
                    </div>
                </section>
            </div>`
}

export function crearTarjetaPastUp(evento) {
    return `<div class="d-flex flex-wrap justify-content-center">
                      <section class="card mt-3 ms-3 shadow" style="width: 18rem;">
                          <img class="img-inicio" src="${evento.image}" class="card-img-top" alt="comida">
                          <div class="card-body">
                              <h5 class="card-title">${evento.name}</h5>
                              <p class="card-text">"${evento.description}"</p>
                          </div>
                          <div class="div-precio d-flex justify-content-around pb-2">
                              <p>Price $${evento.price}</p>
                              <a href="./details.html?_id=${evento._id}" class="btn btn-primary">Details</a>
                          </div>
                      </section>
                  </div>`;
  }