import { crearcheck, mostrarCheck, crearTarjeta, mostrarTarjeta, filtrarPorCategoria, filtrarPorNombre, filtrarEventos, condicionalesCruzadas, filtrarCheckbox } from "../module/funciones.js"

const check = document.getElementById("check");
const main = document.getElementById("main");
const input = document.getElementById("texto-barra-busqueda");
const events = [];


fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((data) => {
    const arrayNuevosEventos = data.events
    mostrarTarjeta(arrayNuevosEventos, main)
    const categoriasSinRepetir = Array.from(new Set(arrayNuevosEventos.map((events) => events.category)));
    mostrarCheck(categoriasSinRepetir, check);
    input.addEventListener("input", () => {
      const filtradoPorNombre = filtrarPorNombre(arrayNuevosEventos, input.value);
      let filtradoPorCategoria = filtrarPorCategoria(filtradoPorNombre);
      condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, arrayNuevosEventos, contenedor)
      check.addEventListener("change", () => {
        const filtradoPorNombre = filtrarPorNombre(arrayNuevosEventos, input.value);
        let filtradoPorCategoria = filtrarPorCategoria(filtradoPorNombre);
        condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, arrayNuevosEventos, contenedor)
      });

    });
  })
  .catch((error) => console.error(error));

const contenedor = document.getElementById("main");
