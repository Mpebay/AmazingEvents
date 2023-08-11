const contenedorCartas = document.getElementById('main-past')


function crearCartas(evento){
    
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

function filtrarEventos (eventos){
  const eventosFiltrados = [];
  for (const evento of eventos){
    if(evento.date < data.currentDate){
      eventosFiltrados.push(evento)
    }
  }
  return eventosFiltrados
}
const pastEvents = filtrarEventos(data.events);



function imprimirCartas ( eventos, cartas) {
      cartas.innerHTML=""
    for (const evento of eventos) {
        const cartaHTML = crearCartas(evento);
        cartas.innerHTML += cartaHTML
    }

}

imprimirCartas(pastEvents, contenedorCartas);
const categorias = document.getElementById('categorias')


function crearCheckbox(category){
 return  `<div class="form-check">
 <input class="form-check-input ms-3" type="checkbox" value="${category}" id="flexCheckDefault1">
 <label class="form-check-label" for="flexCheckDefault1">${category}</label>
</div>`;
}


pastEvents.map((eventos)=>eventos.category)
let categoriesRepetidas = pastEvents.map((eventos)=>eventos.category)

const setCategoriesNoRepetidas = new Set(categoriesRepetidas)
console.log(setCategoriesNoRepetidas)

const arrayCategoriesNoRepetidas = Array.from(setCategoriesNoRepetidas)
console.log(arrayCategoriesNoRepetidas)

function imprimirCheckbox (contenedor, eventos) {
  
  for (const evento of eventos) {
    const checkCreado = crearCheckbox(evento)
    contenedor.innerHTML += checkCreado
    }  
  }
imprimirCheckbox(categorias, arrayCategoriesNoRepetidas);

function filtrarCheckbox(arrayEvents){
  const checkboxSeleccionados = document.querySelectorAll('input[type=checkbox]:checked')
  const valoresCheckbox = Array.from(checkboxSeleccionados).map((input)=>input.value)
  const filtrado = arrayEvents.filter((evento)=>valoresCheckbox.includes(evento.category))

  return filtrado
}

categorias.addEventListener('change', ()=>{
  const filtradoPorNombre = filtrarPorNombre(pastEvents, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
  
})


function filtrarPorNombre (){
  const filtrado = pastEvents.filter((evento)=>evento.name.toLowerCase().includes(busqueda.value.toLowerCase()))
  return filtrado
}

const busqueda = document.getElementById('busqueda')

busqueda.addEventListener('input', ()=>{
  const filtradoPorNombre = filtrarPorNombre(pastEvents, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
})

function condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria) {
  if (filtradoPorNombre.length === data.events.length && filtradoPorCategoria.length === 0){
      imprimirCartas(data.events, contenedorCartas)
  } else if (filtradoPorNombre.length !== data.events.length && filtradoPorCategoria.length === 0){
      imprimirCartas(filtradoPorNombre, contenedorCartas)
      
  } else if (filtradoPorCategoria.length !== 0 && filtradoPorNombre.length === data.events.length){
      imprimirCartas(filtradoPorCategoria, contenedorCartas)
     
  }else if (filtradoPorNombre.length !== data.events.length && filtradoPorCategoria.length !== 0){
      imprimirCartas(filtradoPorCategoria, contenedorCartas)
  } 
}