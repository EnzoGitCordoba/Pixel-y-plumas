// Para que el server se actualice solo descargar npm i nodemon -D
// ir a package.json  , y modificarla parte de scripts quedando --> "scripts" :{ "start" : "nodemon app.js" }
// luego en terminal inicializamos el sv asi: npm run start
// En caso de no actualizar json  :  node app.js en terminal cada vez que hagamos un cambio
// https://www.youtube.com/watch?v=KwLTb7If0d4 video
// primero debemos inicializar el servidor con node app.js y luego con ngrok ya descargado(npm install -g ngrok) ponemos "ngrok http 3000"
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// -------------------------
// 🧩 Middleware
// -------------------------
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// -------------------------
// 📝 Registrar usuarios
// -------------------------
app.post('/registrar', (req, res) => {
    const nuevoUsuario = req.body;
    const filePath = path.join(__dirname, 'usuarios.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        let usuarios = [];
        if (!err && data) usuarios = JSON.parse(data);
        usuarios.push(nuevoUsuario);

        fs.writeFile(filePath, JSON.stringify(usuarios, null, 2), (err) => {
            if (err) {
                console.error('Error guardando usuario:', err);
                return res.status(500).json({ ok: false, mensaje: 'Error al guardar el usuario' });
            }
            res.json({ ok: true, mensaje: 'Usuario registrado correctamente' });
        });
    });
});

// ======================
// 🔐 Login
// ======================
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const filePath = path.join(__dirname, 'usuarios.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ ok: false, mensaje: 'Error al leer usuarios' });
        const usuarios = JSON.parse(data || '[]');
        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (!usuario) return res.status(401).json({ ok: false, mensaje: 'Credenciales incorrectas' });

        res.json({
            ok: true,
            mensaje: 'Inicio de sesión exitoso',
            nombre: usuario.nombre,
            email: usuario.email
        });
    });
});

// ======================
// 🚪 Logout
// ======================
app.post('/logout', (req, res) => {
    console.log("🔒 Usuario cerró sesión");
    res.json({ ok: true, mensaje: 'Sesión cerrada correctamente' });
});

// -------------------------
// 🚀 Iniciar servidor
// -------------------------
app.listen(3000, '0.0.0.0', () => {
    console.log('✅ Servidor corriendo en http://localhost:3000');
});
