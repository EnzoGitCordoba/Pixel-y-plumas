import { mostrarCuento } from "./abrirCuento.js";

export function cargarCuentosExtra(cuentos) {
//le llegan los cuentos previamente cargados en PaginaPPALyAperturas , pero si quisieramos podriamos tener una variable inicializada en 20
//y empezar a añadir desde ese punto , o tener otro featch con otro .json para no sobre cargar ppal
    const contSec = document.getElementById("contenedor-cuentos-extra");



    // Restauramos el formato de grid         podria hacerse mediante un id/ clase  en  un div , pero me ocaciono problemas
   contSec.style.display = "grid";
   contSec.style.gridTemplateColumns = "repeat(5, 1fr)";
   contSec.style.gridTemplateRows = "auto"; // para filas automáticas
   contSec.style.columnGap = "10px";
   contSec.style.rowGap = "10px";
   contSec.style.gridAutoFlow = "row";
   contSec.style.alignItems = "center";
   contSec.style.justifyContent = "center";
   contSec.style.marginLeft = "3%";
    contSec.style.marginRight = "3%";
    contSec.style.marginTop = "10px";
    contSec.style.borderRadius = "15px";


    for (let i = 18; i < cuentos.length; i++) {
        contSec.innerHTML += `

   <div class="Libro" onclick="mostrarCuento(${i})">
            <img class="PortadaDeLibro" src="${cuentos[i].img}">
            <span class="NombreCuento">${cuentos[i].nombre}</span>
            <span class="Descripcion">${cuentos[i].descripcion}</span>
        </div>
     
        `;
    }
}
window.cargarCuentosExtra=cargarCuentosExtra;