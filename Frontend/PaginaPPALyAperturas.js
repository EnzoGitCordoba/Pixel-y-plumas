import { mostrarFormulario } from "./formularios.js";
import { mostrarCuento } from "./abrirCuento.js";
import { cargarCuentosExtra } from "./vermas.js";

let cuentos = [];
let offset = 1; // empieza desde id 0

cargarPrimeros10();

function cargarPrimeros10() {
    fetch(`/api/caracteristicas?cantidad=10&from=${offset}`)
        .then(res => res.json())
        .then(data => {
            cuentos = data;
            agregarLibro();
            offset += 10; // ya cargamos los primeros 10
        })
        .catch(err => console.error("Error cargando el JSON:", err));
}

function agregarLibro() {
    const cont = document.getElementById("cuentos");
    cont.innerHTML = "";

    // AHORA SOLO RENDERIZA LOS 10 OBTENIDOS
    for (let i = 0; i < cuentos.length; i++) {
        const div = document.createElement("div");
        div.className = "Libro";

        div.innerHTML = `
            <img class="PortadaDeLibro" src="${cuentos[i].img}">
            <span class="NombreCuento">${cuentos[i].nombre}</span>
            <span class="Descripcion">${cuentos[i].descripcion}</span>
        `;

        div.onclick = () => { mostrarCuento(i); };
        cont.appendChild(div);
    }

    const cont2 = document.getElementById("mascuentos");
    cont2.innerHTML = `
        <div id="contenedor-cuentos-extra"></div>
        <div class="contenedor-boton-fila">
            <button id="verMasBtn" class="BotonRegistrarse">Ver más cuentos</button>
        </div>
        <div class="contenedor-boton-fila">
            <button id="recomendarCuento" class="BotonRegistrarse">Recomienda un cuento</button>
        </div>
    `;

    document.getElementById("recomendarCuento").onclick = mostrarFormulario;

    document.addEventListener("click", e => {
        if (e.target && e.target.id === "verMasBtn") {
            cargarCuentosExtra(offset);
            offset += 10;
        }
    });
}
