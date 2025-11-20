import { mostrarCuento } from "./abrirCuento.js";
import { cargarCuentosExtra } from "./vermas.js";
let cuentos = [];
fetch("/api/VistaPPAL") // Usamos fetch() para pedir el archivo Cuentos.json al servidor.
    // Cuando la respuesta llega, la convertimos de texto a un objeto JavaScript.
    // res.json() también devuelve una promesa.
    .then(res => res.json())
    // Cuando la conversión termina, recibimos los datos del JSON en "data".
    .then(data => {
        // Guardamos esos datos dentro de la variable global "cuentos".
        cuentos = data;
        // Como ahora ya tenemos los cuentos cargados, llamamos a la función
        // que los mostrará en la página.
        agregarLibro();
    })
    // Si ocurre cualquier error al cargar o leer el JSON, se ejecuta este catch.
    .catch(err => console.error("Error cargando el JSON:", err));
// Función que se encarga de mostrar todos los cuentos en la página


function agregarLibro() {
    // Obtiene el elemento del DOM con id="cuentos" y lo guarda en 'cont'
    const cont = document.getElementById("cuentos");


    // Limpia el contenido HTML previo del contenedor para evitar duplicados
    cont.innerHTML = "";
    // Bucle que recorre todos los elementos del array 'cuentos'
    for (let i = 0; i < 18; i++) {
        // Agrega al contenedor un bloque HTML con los datos de cada cuento
        cont.innerHTML += `
        <div class="Libro" onclick="mostrarCuento(${i})">          
            <img class="PortadaDeLibro" src="${cuentos[i].img}">
            <span class="NombreCuento">${cuentos[i].nombre}</span>
            <span class="Descripcion">${cuentos[i].descripcion}</span>
        </div>
        `;

    }

    const cont2 = document.getElementById("mascuentos");
    cont2.innerHTML += `
     <div id="contenedor-cuentos-extra">  </div>
    <div class="contenedor-boton-fila">
        <button id="verMasBtn" class="BotonRegistrarse">Ver más cuentos</button>
       
    </div>
    <div class="contenedor-boton-fila">
        <button id="recomendarCuento" class="BotonRegistrarse">Recomienda un cuento</button>
    </div>
 
`;
    // Asigna la función 'mostrarFormulario' para ejecutarse cuando se haga clic
    // en el div con id="recomendarCuento"
    document.getElementById("recomendarCuento").onclick = mostrarFormulario
    document.addEventListener("click", e => {
        if (e.target && e.target.id === "verMasBtn") {
            cargarCuentosExtra(cuentos);
        }
    });
}
