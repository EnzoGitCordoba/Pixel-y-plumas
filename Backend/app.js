
//Status code explicados en : https://http.cat/
// basicos: 200 ok . 301 recurso movido a otro sito . 400 bad req . 404  not found (no encontrado) .500 internal sv error

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../Frontend'))); // Servir la carpeta Frontend
app.use(express.json());
app.use(express.text());
const fs = require("fs");

// JSONs en Backend/data
const cuentos = require(path.join(__dirname, 'data', 'Cuentos.json'));
const vista = require(path.join(__dirname, 'data', 'VistaPPAL.json'));
const usuarios = require(path.join(__dirname, 'data', 'usuarios.json'));
const recomendaciones = require(path.join(__dirname, 'data', 'Recomendaciones.json'));

//--------------------------------------METODOS GETS----------------------------------------------
// GET principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));
});

// GET todos los cuentos
app.get('/api/cuentos', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'Cuentos.json'));
});
//GET solo de los datos en vistappal
app.get('/api/VistaPPAL', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'VistaPPAL.json'));
});

// GET cuento por ID
app.get('/api/cuentos/:id', (req, res) => {
    const id = req.params.id;
    const cuento = cuentos.find(c => c.id === id);
    if (!cuento) {
        return res.status(404).json({ error: "Cuento no encontrado" });
    }
    res.json(cuento);
});
// GET vistappal por id
app.get('/api/vistaPPAL/:id', (req, res) => {
    const id = req.params.id;
    const VistaPPAL = vista.find(c => c.id === id);

    if (!VistaPPAL) {
        return res.status(404).json({ error: "Cuento no encontrado" });
    }

    res.json(VistaPPAL);
});

//--------------------------------------METODOS POST----------------------------------------------


app.post('/api/usuarios', (req, res) => {
    const { nombre, mail, clave } = req.body;

    if (!nombre || !mail || !clave) {
        return res.status(400).json({
            ok: false,
            mensaje: "Faltan datos: nombre, mail o clave."
        });
    }

    const nuevoUsuario = { nombre, mail, clave };

    usuarios.push(nuevoUsuario);

    fs.writeFileSync(path.join(__dirname, 'data', 'usuarios.json'), JSON.stringify(usuarios, null, 2));

    res.status(201).json({
        ok: true,
        mensaje: "Usuario registrado correctamente",
        usuario: nuevoUsuario
    });
});

app.post('/api/recomendaciones', (req, res) => {
    const { nombre, mail, titulo , descripcion } = req.body;

    if (!nombre || !mail || !titulo || !descripcion) {
        return res.status(400).json({
            ok: false,
            mensaje: "Faltan datos: titulo o descripcion."
        });
    }

    const nuevaRecomendacion = { nombre, mail, titulo, descripcion };

    recomendaciones.push(nuevaRecomendacion);

    fs.writeFileSync(path.join(__dirname, 'data', 'Recomendaciones.json'), JSON.stringify(recomendaciones, null, 2));

    res.status(201).json({
        ok: true,
        mensaje: "recomendacion guardada",
        recomendacion: nuevaRecomendacion
    });
});

app.post('/api/login', (req, res) => {
    const { usuario, contras } = req.body;
    const us = usuarios.find(u => u.usuario === usuario && u.contras === contras);

    if (!us) {
        return res.status(401).json({ ok: false, mensaje: "Mail o contraseña incorrecta" });
    }

    res.json({
        ok: true,
        mensaje: "Usuario registrado correctamente",
        nombreUs: us.nombre,
        email: us.mail
    });
});


//--------------------------------------------INICIO SERVIDOR ----------------------------
// Iniciar servidor
app.listen(3000, '0.0.0.0', () => {
    console.log("Servidor accesible desde tu red local en el puerto 3000");
});

// Para que el server se actualice solo descargar npm i nodemon -D
// ir a package.json  , y modificarla parte de scripts quedando --> "scripts" :{ "start" : "nodemon app.js" } (CUIDADO CON LA RUTA)
// luego en terminal inicializamos el sv asi: cd Backend  y luego    npm run start
// En caso de no actualizar json  :  node app.js en terminal cada vez que hagamos un cambio
// https://www.youtube.com/watch?v=KwLTb7If0d4 video