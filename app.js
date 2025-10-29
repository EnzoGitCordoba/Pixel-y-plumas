// poner : npm run start          en la terminal para inicializar server

const express = require ('express');

const app= express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));//  Servir archivos estáticos (CSS, JS, imágenes)

// Ruta principal
app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.sendFile(path.join(__dirname + "/index.html"));

})
// Iniciar servidor
app.listen(3000, ()=> {
    console.log("Server started on port 3000");
});