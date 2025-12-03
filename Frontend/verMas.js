import { mostrarCuento } from "./abrirCuento.js";

export function cargarCuentosExtra(offset) {
    const cantidadPorPagina = 10;

    fetch(`/api/caracteristicas?cantidad=${cantidadPorPagina}&from=${offset}`)
        .then(res => res.json())
        .then(nuevos => {

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

            nuevos.forEach((cuento, index) => {
                if (cuento.error) return;

                const div = document.createElement("div");
                div.className = "Libro";

                div.innerHTML = `
                    <img class="PortadaDeLibro" src="${cuento.img}">
                    <span class="NombreCuento">${cuento.nombre}</span>
                    <span class="Descripcion">${cuento.descripcion}</span>
                `;

                // cada cuento tiene su id global = offset + index
                div.onclick = () => mostrarCuento(offset + index);

                contSec.appendChild(div);
            });

        })
        .catch(err => console.error("Error cargando más cuentos:", err));
}
