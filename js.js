import { cuentos } from "./CuentosCargados.js";  // importo los cuentos

console.log(cuentos);  // con esto puedo utilizarlos

// ==========================
// MOSTRAR CUENTOS EN PÁGINA PRINCIPAL
// ==========================
function agregarLibro() {
    const cont = document.getElementById("cuentos");
    cont.innerHTML = "";

    for (let i = 0; i < cuentos.length; i++) {
        cont.innerHTML += `
        <div class="Libro" onclick="mostrarCuento(${i})">
            <img class="PortadaDeLibro" src="${cuentos[i].img}">
            <span class="NombreCuento">${cuentos[i].nombre}</span>
            <span class="Descripcion">${cuentos[i].descripcion}</span>
        </div>
        `;
    }

    cont.innerHTML += `
    <div class="Libro" id="recomendarCuento">
        <img class="PortadaDeLibro" src="../imagenes/cuentosEnPaginaPPAL/proximamente.jpg" alt="Recomendar cuento">
        <span class="NombreCuento">¡Recomienda un cuento!</span>
        <span class="Descripcion">Haz clic aquí para enviarnos tu historia favorita</span>
    </div>
    `;

    document.getElementById("recomendarCuento").onclick = mostrarFormulario;
}

window.onload = agregarLibro;

// ==========================
// MOSTRAR CUENTO SELECCIONADO
// ==========================
function mostrarCuento(index) {
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

window.mostrarCuento = mostrarCuento;
window.mostrarFormulario = mostrarFormulario;
window.abrirRegistro = abrirRegistro;
window.abrirInicioSesion = abrirInicioSesion;

// ==========================
// FORMULARIO RECOMENDAR CUENTO
// ==========================
function mostrarFormulario() {
    const modulo = document.createElement("div");
    modulo.id = "moduloFormulario";
    modulo.innerHTML = `
        <div class="modulo-fondo">
            <div class="modulo-caja">
                <h2>Recomienda un cuento</h2>
                <p>Nos encantaría saber qué cuento te gustaría ver </p>
                <form id="formCuento">
                    <input type="text" id="titulo" placeholder="Título del cuento" required>
                    <textarea id="descripcion" placeholder="¿Por qué te gusta este cuento?" required></textarea>
                    <button type="submit">Enviar</button>
                    <button type="button" id="cerrarmodulo">Cancelar</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modulo);
    document.getElementById("cerrarmodulo").onclick = () => modulo.remove();

    document.getElementById("formCuento").onsubmit = (e) => {
        e.preventDefault();
        alert("¡Gracias por tu recomendación!");
        modulo.remove();
    };
}

// ==========================
// FORMULARIO REGISTRO
// ==========================
function abrirRegistro() {
    const modulo = document.createElement("div");
    modulo.id = "moduloFormulario";
    modulo.innerHTML = `
        <div class="modulo-fondo">
            <div class="modulo-caja">
                <h2>Registrarse</h2>
                <form id="formRegistro">
                    <input type="email" id="email" placeholder="Ingresa tu correo" required>
                    <input type="text" id="nombre" placeholder="Ingresa tu nombre" required>
                    <input type="password" id="password" placeholder="Ingrese su contraseña" required>
                    <button type="submit">Enviar</button>
                    <button type="button" id="cerrarmodulo">Cancelar</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modulo);
    document.getElementById("cerrarmodulo").onclick = () => modulo.remove();

    document.getElementById("formRegistro").onsubmit = async (e) => {
        e.preventDefault();
        const usuario = {
            email: document.getElementById("email").value,
            nombre: document.getElementById("nombre").value,
            password: document.getElementById("password").value
        };
        const res = await fetch('/registrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });
        const data = await res.json();
        if (data.ok) {
            alert("✅ ¡Gracias por registrarte!");
            localStorage.setItem("usuarioActual", JSON.stringify({ nombre: usuario.nombre, email: usuario.email }));
            modulo.remove();
            actualizarInterfazUsuario();
        } else {
            alert("❌ Ocurrió un error al registrarte.");
        }
    };
}

// ==========================
// FORMULARIO INICIO DE SESIÓN
// ==========================
function abrirInicioSesion() {
    const modulo = document.createElement("div");
    modulo.id = "moduloFormulario";
    modulo.innerHTML = `
        <div class="modulo-fondo">
            <div class="modulo-caja">
                <h2>Iniciar Sesión</h2>
                <form id="formLogin">
                    <input type="email" id="emailLogin" placeholder="Correo electrónico" required>
                    <input type="password" id="passwordLogin" placeholder="Contraseña" required>
                    <button type="submit">Ingresar</button>
                    <button type="button" id="cerrarmodulo">Cancelar</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modulo);
    document.getElementById("cerrarmodulo").onclick = () => modulo.remove();

    document.getElementById("formLogin").onsubmit = async (e) => {
        e.preventDefault();
        const loginData = {
            email: document.getElementById("emailLogin").value,
            password: document.getElementById("passwordLogin").value
        };
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        });
        const data = await res.json();
        if (data.ok) {
            alert(`👋 ¡Bienvenido de nuevo, ${data.nombre}!`);
            localStorage.setItem("usuarioActual", JSON.stringify({ nombre: data.nombre, email: data.email }));
            modulo.remove();
            actualizarInterfazUsuario();
        } else {
            alert("❌ Correo o contraseña incorrectos.");
        }
    };
}

// ==========================
// INTERFAZ DE SESIÓN (LOGIN / REGISTRO / SALUDO)
// ==========================
function asegurarContenedorBotones() {
    let cont = document.getElementById('botonesUsuario');
    if (!cont) {
        cont = document.createElement('div');
        cont.id = 'botonesUsuario';
        document.body.prepend(cont);
    }
    return cont;
}

function actualizarInterfazUsuario() {
    const contenedor = asegurarContenedorBotones();
    const usuario = JSON.parse(localStorage.getItem("usuarioActual"));

    if (usuario) {
        contenedor.innerHTML = `
            <span id="Usuario">Hola, ${usuario.nombre}</span>
            <button id="cerrarSesionBtn" class="BotonRegistrarse">Cerrar sesión</button>
        `;
        document.getElementById("cerrarSesionBtn").onclick = cerrarSesion;
    } else {
        contenedor.innerHTML = `
            <button onclick="abrirInicioSesion()" class="BotonRegistrarse">Iniciar sesión</button>
            <button onclick="abrirRegistro()" class="BotonRegistrarse">Registrarse</button>
        `;
    }
}

document.addEventListener("DOMContentLoaded", actualizarInterfazUsuario);

// ==========================
// CERRAR SESIÓN
// ==========================
async function cerrarSesion() {
    try {
        const res = await fetch('/logout', { method: 'POST' });
        const data = await res.json();
        if (data.ok) {
            localStorage.removeItem("usuarioActual");
            actualizarInterfazUsuario();
            alert("🔒 Sesión cerrada correctamente");
        } else {
            alert("⚠️ Error al cerrar sesión en el servidor.");
        }
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        localStorage.removeItem("usuarioActual");
        actualizarInterfazUsuario();
        alert("🔒 Sesión cerrada localmente (sin conexión al servidor).");
    }
}
