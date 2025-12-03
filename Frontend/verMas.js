import { mostrarCuento } from "./abrirCuento.js";

export function cargarCuentosExtra(cuentos) {
    const contSec = document.getElementById("contenedor-cuentos-extra");

    contSec.style.display = "grid";
    contSec.style.gridTemplateColumns = "repeat(5, 1fr)";
    contSec.style.gridTemplateRows = "auto";
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

        const div = document.createElement("div");
        div.className = "Libro";

        div.innerHTML = `
            <img class="PortadaDeLibro" src="${cuentos[i].img}">
            <span class="NombreCuento">${cuentos[i].nombre}</span>
            <span class="Descripcion">${cuentos[i].descripcion}</span>
        `;

        div.onclick = () => mostrarCuento(i);

        contSec.appendChild(div);
    }
}
