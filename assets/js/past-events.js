import {crearcheck, mostrarCheck, crearTarjetaPastUp, mostrarTarjetaPastUp, condicionalesCruzadas,  filtrarEventos,  filtrarPorNombre, filtrarCheckbox } from "../module/funciones.js"

const contenedorCartas = document.getElementById('main-past')
const categorias = document.getElementById('categorias')
const busqueda = document.getElementById('busqueda')

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((data) => {
    const arrayCompleto = data.events
    const currentDate = data.currentDate
    let arrayEventosPasados = filtrarEventos(arrayCompleto, currentDate);
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
    function condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria) {
      if (filtradoPorNombre.length === arrayEventosPasados.length && filtradoPorCategoria.length === 0) {
        mostrarTarjetaPastUp(arrayEventosPasados, contenedorCartas)
      } else if (filtradoPorNombre.length !== arrayEventosPasados.length && filtradoPorCategoria.length === 0) {
        mostrarTarjetaPastUp(filtradoPorNombre, contenedorCartas)

      } else if (filtradoPorCategoria.length !== 0 && filtradoPorNombre.length === arrayEventosPasados.length) {
        mostrarTarjetaPastUp(filtradoPorCategoria, contenedorCartas)

      } else if (filtradoPorNombre.length !== arrayEventosPasados.length && filtradoPorCategoria.length !== 0) {
        mostrarTarjetaPastUp(filtradoPorCategoria, contenedorCartas)
      }
    }
  })


