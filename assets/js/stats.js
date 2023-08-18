let contenedorTabla = document.getElementById("idBody")
let contendorTabla2 = document.getElementById("idBody2")
let contendorTabla3 = document.getElementById("idBody3")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => {
        const arrayNuevosEventos = data.events
        let eventosOrdenadosPorCapacidad = arrayNuevosEventos.sort((a, b) => b.capacity - a.capacity)
        let eventoDeMayorCapacidad = eventosOrdenadosPorCapacidad.slice(0, 1)
        let eventosPasados = arrayNuevosEventos.filter(evento => evento.assistance)
        let eventosFuturos = arrayNuevosEventos.filter(evento =>evento.estimate )
        let arrayEventosModificados = eventosPasados.map(evento => {
            return {
                name: evento.name,
                capacity: evento.capacity,
                assistance: evento.assistance,
                category: evento.category,
                price: evento.price,
                percentage: (evento.assistance / evento.capacity) * 100,
                revenues: evento.assistance * evento.price
            }

        })
        let arrayOrdenadosPorcentaje = arrayEventosModificados.sort((a, b) => b.percentage - a.percentage)
        let eventoMayorPorcentajeAsistencia = arrayOrdenadosPorcentaje.slice(0, 1)
        let eventoMenorPorcentajeAsistencia = arrayOrdenadosPorcentaje.slice(-1)
        let crearTabla = crearTabla1(eventoMayorPorcentajeAsistencia, eventoMenorPorcentajeAsistencia, eventoDeMayorCapacidad)
        mostrarTabla(crearTabla, contenedorTabla)

        let arrayCategoriasSinRepetir = Array.from(new Set(arrayEventosModificados.map((events) => events.category)))
        let arrayDeArrays = arrayCategoriasSinRepetir.map(categoria => arrayEventosModificados.filter(evento => evento.category === categoria))
        let bucleArray = reduccionDeArrayEventos(arrayDeArrays)
        crearTabla2(bucleArray, contendorTabla2)

        let arrayEventosModificados1 = eventosFuturos.map(evento => {
            return {
                name: evento.name,
                capacity: evento.capacity,
                estimate: evento.estimate,
                category: evento.category,
                price: evento.price,
                percentage: (evento.estimate * 100) / evento.capacity,
                revenues: evento.estimate * evento.price
            }
        })
        let arrayCategoriasFuturas = Array.from(new Set(arrayEventosModificados1.map((events) => events.category)))
        let arrayDeArraysFuturas = arrayCategoriasFuturas.map(categoria => arrayEventosModificados1.filter(evento => evento.category === categoria))
        let bucleArrayFuturos = reduccionDeArrayEventos(arrayDeArraysFuturas)
        crearTabla2(bucleArrayFuturos, contendorTabla3)

    })

function crearTabla1(array, array1, array2) {
    return `<tr>
<td>${array[0].name}: ${array[0].percentage.toFixed(2)} %</td>
<td>${array1[0].name}: ${array1[0].percentage} %</td>
<td>${array2[0].name}: ${array2[0].capacity}</td>
</tr>`
}

function crearTabla2(array, contenedor ){
   let filaTabla2 = ""
   for (const objeto of array) {
    filaTabla2 += `<tr>
    <td>${objeto.categoria}</td>
    <td>$ ${objeto.ganancias}</td>
    <td>${objeto.porcentajeAsistencia.toFixed(2)} %</td>
  </tr>` 
   }
   contenedor.innerHTML = filaTabla2
    
}

function mostrarTabla(tabla, contenedor) {
    contenedor.innerHTML = tabla
}
function reduccionDeArrayEventos (arrayDeArrays){
    let resultadoReduce = 0
    let arrayAux = []
    for (const array of arrayDeArrays) {
        let category = ""
        let revenues = 0
        let percentage = 0
        resultadoReduce = array.reduce((acc, act) => {
                    category = act.category
                    revenues += act.revenues
                    percentage += act.percentage
                    return {
                        categoria : act.category,
                        ganancias : revenues,
                        porcentajeAsistencia : percentage/array.length
                    }
        }, {})
        arrayAux.push(resultadoReduce)
    }
    return arrayAux
}