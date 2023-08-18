import {renderTarjeta, crearTarjetaDetails} from "../module/funciones.js"

let contenedorDetails = document.getElementById("contenedor-details")
const parametros = location.search
const objetosUrl = new URLSearchParams(parametros)
const idCarta = objetosUrl.get("_id")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => {
        const arrayNuevosEventos = data.events
        const objetoCarta = arrayNuevosEventos.find(objetoCarta => objetoCarta._id == idCarta)
        let objetoCartaFinal = crearTarjetaDetails(objetoCarta)
        renderTarjeta(objetoCartaFinal, contenedorDetails)
    })








