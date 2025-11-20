let cuentos = [];
fetch("/api/cuentos") // Usamos fetch() para pedir el archivo Cuentos.json al servidor.
    // Cuando la respuesta llega, la convertimos de texto a un objeto JavaScript.
    // res.json() también devuelve una promesa.
    .then(res => res.json())
    // Cuando la conversión termina, recibimos los datos del JSON en "data".
    .then(data => {
        // Guardamos esos datos dentro de la variable global "cuentos".
        cuentos = data;
        // Como ahora ya tenemos los cuentos cargados, llamamos a la función
        // que los mostrará en la página.
    })
    // Si ocurre cualquier error al cargar o leer el JSON, se ejecuta este catch.
    .catch(err => console.error("Error cargando el JSON:", err));
// Función que se encarga de mostrar todos los cuentos en la página


export function mostrarCuento(index) {
    const cuento = cuentos[index];
    const contenedor = document.getElementById("cuentos");
    contenedor.style.display = "flex";
    contenedor.style.flexDirection = "column";
    contenedor.style.alignItems = "center";

    contenedor.innerHTML = `
    <div class="bodyEnCuentos" id="bodyEnCuentos">
        <h1 class="TituloLibroEP">${cuento.nombre}</h1>
        <audio class="audios" src="${cuento.audioDelCuento}" controls></audio>
        <div class="ControlesLectura">
            <button id="btnAumentar">Letra+</button>
            <button id="btnReducir">Letra-</button>
            <input id="rangoOpacidad" type="range" min="0.3" max="1" step="0.1" value="0.8">Opacidad</input>
        </div>
        <p class="textoGeneral">${cuento.textoDelCuento}</p>
    </div>
    `;

    const bodyEnCuentos = document.getElementById("bodyEnCuentos");
    bodyEnCuentos.style.backgroundImage = `url("${cuento.imagenDelcuento}")`;

    const texto = document.querySelector(".textoGeneral");
    const btnAumentar = document.getElementById("btnAumentar");
    const btnReducir = document.getElementById("btnReducir");
    const rangoOpacidad = document.getElementById("rangoOpacidad");

    let tamañoActual = 25;
    btnAumentar.onclick = () => {
        tamañoActual += 2;
        texto.style.fontSize = `${tamañoActual}px`;
    };
    btnReducir.onclick = () => {
        tamañoActual = Math.max(14, tamañoActual - 2);
        texto.style.fontSize = `${tamañoActual}px`;
    };
    rangoOpacidad.oninput = () => {
        texto.style.backgroundColor = `rgba(221, 241, 237, ${rangoOpacidad.value})`;
    };
}
window.mostrarCuento=mostrarCuento;