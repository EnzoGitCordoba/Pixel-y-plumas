// Para que el server se actualice solo descargar npm i nodemon -D
// ir a package.json  , y modificarla parte de scripts quedando --> "scripts" :{ "start" : "nodemon app.js" }
// luego en terminal inicializamos el sv asi: npm run start
// En caso de no actualizar json  :  node app.js en terminal cada vez que hagamos un cambio
// https://www.youtube.com/watch?v=KwLTb7If0d4 video
const express = require ('express');
const path = require('path');
const app= express();



app.use(express.static(__dirname));//  Servir archivos estáticos (CSS, JS, imágenes)

// Ruta principal
app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.sendFile(path.join(__dirname + "/index.html"));

})

app.listen(3000, '0.0.0.0', () => {
    console.log("Servidor accesible desde tu red local en el puerto 3000");
});
