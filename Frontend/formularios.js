window.mostrarFormulario = mostrarFormulario;
window.abrirRegistro = abrirRegistro;
window.abrirInicioSesion = abrirInicioSesion;


// --------------------------------FORMULARIO RECOMENDAR CUENTO---------------------------------------------------------------
function mostrarFormulario() {
    const usuarioStr = localStorage.getItem("usuarioActual");
    if (usuarioStr) {
        const usuario = JSON.parse(usuarioStr);
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

        document.getElementById("formCuento").onsubmit = async (e) => {
            e.preventDefault();
            const titulo = document.getElementById("titulo").value;
            const descripcion = document.getElementById("descripcion").value;

            try {
                await fetch("/api/recomendaciones", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ nombre: usuario.nombre, mail: usuario.mail, titulo, descripcion })
                });
                alert("¡Gracias por tu recomendación!");
                modulo.remove();
            } catch (err) {
                alert("Error al enviar la recomendación");
                console.error(err);
            }
        };
    } else {
        alert("Para recomendar debe iniciar sesión");
    }
}

// --------------------------------FORMULARIO REGISTRO--------------------------------------------------------------
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
                    <button type="button" id="cerrar">Cancelar</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modulo);
    document.getElementById("cerrar").onclick = () => modulo.remove();

    document.getElementById("formRegistro").onsubmit = async (e) => {
        e.preventDefault();
        const datos = {
            nombre: document.getElementById("nombre").value,
            mail:   document.getElementById("email").value,
            clave:  document.getElementById("password").value
        };

        const respuesta = await fetch("/api/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();
        if (resultado.ok) {
            alert("Usuario registrado correctamente.");
            localStorage.setItem("usuarioActual", JSON.stringify({ nombre: datos.nombre, mail: datos.mail }));
            modulo.remove();
            if (typeof actualizarInterfazUsuario === "function") actualizarInterfazUsuario();
        } else {
            alert("Error: " + (resultado.mensaje || "No se pudo registrar"));
        }
    };
}

// --------------------------------ABRIR INICIO SESION  --------------------------------------------------------------
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
        const loginData = { email: document.getElementById("emailLogin").value, password: document.getElementById("passwordLogin").value };
        const res = await fetch('/api/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginData) });
        const data = await res.json();
        if (data.ok) {
            alert(`¡Bienvenido de nuevo, ${data.nombreUs}!`);
            localStorage.setItem("usuarioActual", JSON.stringify({ nombre: data.nombreUs, email: data.email }));
            modulo.remove();
            actualizarInterfazUsuario();
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    };
}

// --------------------------------ACTUALIZACION DE INTERFAZ --------------------------------------------------------------
function actualizarInterfazUsuario() {
    const contenedor = asegurarContenedorBotones();
    const usuario = JSON.parse(localStorage.getItem("usuarioActual"));
    if (usuario) {
        contenedor.innerHTML = `<span id="Usuario">Hola, ${usuario.nombre}</span>
                                <button id="cerrarSesionBtn" class="BotonRegistrarse">Cerrar sesión</button>`;
        document.getElementById("cerrarSesionBtn").onclick = cerrarSesion;
    } else {
        contenedor.innerHTML = `<button onclick="abrirInicioSesion()" class="BotonRegistrarse">Iniciar sesión</button>
                                <button onclick="abrirRegistro()" class="BotonRegistrarse">Registrarse</button>`;
    }
}

document.addEventListener("DOMContentLoaded", actualizarInterfazUsuario);

function asegurarContenedorBotones() {
    let cont = document.getElementById('botonesUsuario');
    if (!cont) { cont = document.createElement('div'); cont.id = 'botonesUsuario'; document.body.prepend(cont); }
    return cont;
}

async function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    actualizarInterfazUsuario();
    alert(" Sesión cerrada ");
}
