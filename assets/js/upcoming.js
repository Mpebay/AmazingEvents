import { filtrarEventos1, mostrarCheck, mostrarTarjetaPastUp, condicionalesCruzadas, crearTarjetaPastUp, crearcheck, filtrarCheckbox, filtrarPorNombre,   } from "../module/funciones.js"

const contenedorCartas = document.getElementById('main-up')
const categorias = document.getElementById('categorias')
const busqueda = document.getElementById('busqueda')


fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((data) => {
    const arrayCompleto = data.events
    const currentDate = data.currentDate
    let arrayEventosPasados = filtrarEventos1(arrayCompleto, currentDate);
    mostrarTarjetaPastUp(arrayEventosPasados, contenedorCartas)
    let categoriesRepetidas = arrayCompleto.map((eventos) => eventos.category)
    const setCategoriesNoRepetidas = new Set(categoriesRepetidas)
    const arrayCategoriesNoRepetidas = Array.from(setCategoriesNoRepetidas)
    mostrarCheck(arrayCategoriesNoRepetidas, categorias);
    busqueda.addEventListener('input', () => {
      const filtradoPorNombre = filtrarPorNombre(arrayEventosPasados, busqueda.value)
      const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
      condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, arrayEventosPasados, contenedorCartas)
    })
    categorias.addEventListener('change', () => {
      const filtradoPorNombre = filtrarPorNombre(arrayEventosPasados, busqueda.value)
      const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
      condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, arrayEventosPasados, contenedorCartas)
    })
  })