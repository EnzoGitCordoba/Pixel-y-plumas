
export const cuentos = [
    {img:"imagenes/cuentosEnPaginaPPAL/BlancaNievesYlos7enanitos.png", nombre: "Blancanieves y los 7 enanitos",
        descripcion:"👑 Una princesa valiente, siete amiguitos y una manzana envenada",
        imagenDelcuento:"imagenes/FondoCuentos/FBN.jpg", textoDelCuento:`
                Había una vez una niña muy bonita, una pequeña princesa que tenía un cutis blanco como
                la nieve, labios y mejillas rojos como la sangre y cabellos negros como el azabache. Su
                nombre era Blancanieves.
                <br/>
                A medida que crecía la princesa, su belleza aumentaba día tras día hasta que su
                madrastra, la reina, se puso muy celosa. Llegó un día en que la malvada madrastra no
                pudo tolerar más su presencia y ordenó a un cazador que la llevara al bosque y la matara.
                Como ella era tan joven y bella, el cazador se apiadó de la niña y le aconsejó que buscara
                un escondite en el bosque.
                <br/>
                Blancanieves corrió tan lejos como se lo permitieron sus piernas, tropezando con rocas y
                troncos de árboles que la lastimaban. Por fin, cuando ya caía la noche, encontró una casita
                y entró para descansar.
                <br/>
                Todo en aquella casa era pequeño, pero más lindo y limpio de lo que se pueda imaginar.
                Cerca de la chimenea estaba puesta una mesita con siete platos muy pequeñitos, siete
                tacitas de barro y al otro lado de la habitación se alineaban siete camitas muy ordenadas.
                <br/>
                La princesa, cansada, se echó sobre tres de las camitas, y se quedó profundamente
                dormida.
                <br/>
                Cuando llegó la noche, los dueños de la casita regresaron. Eran siete enanitos, que todos
                los días salían para trabajar en las minas de oro, muy lejos, en el corazón de las montañas.
                <br/>
                -¡Caramba, qué bella niña! -exclamaron sorprendidos-. ¿Y cómo llegó hasta aquí?
                <br/>
                Se acercaron para admirarla cuidando de no despertarla. Por la mañana, Blancanieves sintió miedo al despertarse y ver a los siete enanitos que la rodeaban. Ellos la interrogaron
                tan suavemente que ella se tranquilizó y les contó su triste historia.
                <br/>
                -Si quieres cocinar, coser y lavar para nosotros -dijeron los enanitos-, puedes quedarte
                aquí y te cuidaremos siempre.
                <br/>
                Blancanieves aceptó contenta.
                <br/>
                Vivía muy alegre con los enanitos, preparándoles la comida y cuidando de la casita. Todas las mañanas se paraba en la puerta y los despedía con la
                mano cuando los enanitos salían para su trabajo.
                <br/>
                Pero ellos le advirtieron:
                <br/>
                -Cuídate. Tu madrastra puede saber que vives aquí y tratará de hacerte daño.
                <br/>
                La madrastra, que de veras era una bruja, y consultaba a su espejo mágico para ver si
                existía alguien más bella que ella, descubrió que Blancanieves vivía en casa de los siete
                enanitos. Se puso furiosa y decidió matarla ella misma. Disfrazada de vieja, la malvada
                reina preparó una manzana con veneno, cruzó las siete montañas y llegó a casa de los
                enanitos.
                <br/>
                Blancanieves, que sentía una gran soledad durante el día, pensó que aquella viejita no
                podía ser peligrosa. La invitó a entrar y aceptó agradecida la manzana, al parecer deliciosa,
                que la bruja le ofreció. Pero, con el primer mordisco que dio a la fruta, Blancanieves cayó
                como muerta.
                <br/>
                Aquella noche, cuando los siete enanitos llegaron a la casita, encontraron a Blancanieves
                en el suelo. No respiraba ni se movía. Los enanitos lloraron amargamente porque la
                querían con delirio. Por tres días velaron su cuerpo, que seguía conservando su belleza -
                cutis blanco como la nieve, mejillas y labios rojos como la sangre, y cabellos negros como
                el azabache.
                <br/>
                -No podemos poner su cuerpo bajo tierra -dijeron los enanitos. Hicieron un ataúd de
                cristal, y colocándola allí, la llevaron a la cima de una montaña. Todos los días los enanitos
                iban a velarla.
                <br/>
                Un día el príncipe, que paseaba en su gran caballo blanco, vio a la bella niña en su caja de
                cristal y pudo escuchar la historia de labios de los enanitos. Se enamoró de Blancanieves y
                logró que los enanitos le permitieran llevar el cuerpo al palacio donde prometió adorarla
                siempre. Pero cuando movió la caja de cristal tropezó y el pedazo de manzana que había
                comido Blancanieves se desprendió de su garganta. Ella despertó de su largo sueño y se
                sentó. Hubo gran regocijo, y los enanitos bailaron alegres mientras Blancanieves aceptaba
                ir al palacio y casarse con el príncipe.`, audioDelCuento:"Audios/abn.mp3"},
];

import { cuentos } from "./CuentosCargados.js";  //importo los cuentos

console.log(cuentos);  //con esto puedo utilizarlos



function agregarLibro(){
    const cont = document.getElementById("cuentos");   //  busca en el HTML un elemento que tenga el atributo id="cuentos" y lo guarda en la variable cont.
    cont.innerHTML = ""; // limpiar antes es decir, borrando borro lo que tenia el contenedor

    for(let i = 0; i < cuentos.length; i++){   //recorro todos los cuentos

        // cambio el contenido de cont. uso ` para escribir html dentro de js .
        cont.innerHTML += `       
      <div class="Libro" onclick="mostrarCuento(${i})">
       <!-- uso $ para agregar el valor de una variable a mi html --> 
        <img class="PortadaDeLibro" src="${cuentos[i].img}" >    
        <span class="NombreCuento">${cuentos[i].nombre}</span>
        <span class="Descripcion">${cuentos[i].descripcion}</span>
      </div>
    `;
    }
    // Al final del listado, agregamos con formulario  "Próximamente"
    cont.innerHTML += `
  <div class="Libro" id="recomendarCuento">
    <img class="PortadaDeLibro" src="imagenes/cuentosEnPaginaPPAL/proximamente.jpg" alt="Recomendar cuento">
    <span class="NombreCuento">¡Recomienda un cuento!</span>
    <span class="Descripcion">Haz clic aquí para enviarnos tu historia favorita</span>
  </div>
`;

// click para abrir el formulario
    document.getElementById("recomendarCuento").onclick = mostrarFormulario; //   cuando clikeamos sobre el id: recomendarCuentos que esta en el html , ejecuta mostrarFormulario
}
window.onload = agregarLibro; // ejecuta agregarLibro apenas arrancamos

function mostrarCuento(index) { // recibo el arreglo por parametro desde agregarLibro
    const cuento = cuentos[index]; //renombro el objeto
    const contenedor = document.getElementById("cuentos"); //busco el id "cuentos"dentro de mi html
//cambiamos la disposicion grid por flex para acomodar nuestra pagina
    contenedor.style.display = "flex";
    contenedor.style.flexDirection = "column";
    contenedor.style.alignItems = "center";

    // Agregamos contenido del cuento en especifico que se abrio
    contenedor.innerHTML = `
    <div class="bodyEnCuentos" id="bodyEnCuentos">
        <h1 class="TituloLibroEP">${cuento.nombre}</h1>
        <audio class="audios" src="${cuento.audioDelCuento}" controls></audio>

        <!-- añadimos controles de lectura -->
        <div class="ControlesLectura">
            <button id="btnAumentar">Letra+</button>
            <button id="btnReducir">Letra-</button>
            <input id="rangoOpacidad" type="range" min="0.3" max="1" step="0.1" value="0.8" title="Opacidad del fondo">Opacidad</input>
        </div>

        <p class="textoGeneral">${cuento.textoDelCuento}</p>
    </div>
    `;

    // Fondo del cuento
    const bodyEnCuentos = document.getElementById("bodyEnCuentos"); // Almacena en bodyEnCuentos lo que tiene la etiqueta "bodyEnCuentos" dentro del html
    bodyEnCuentos.style.backgroundImage = `url("${cuento.imagenDelcuento}")`; //cambiamos el fondo del libro

    //  Funcionalidad de los botones
    const texto = document.querySelector(".textoGeneral");
    const btnAumentar = document.getElementById("btnAumentar");
    const btnReducir = document.getElementById("btnReducir");
    const rangoOpacidad = document.getElementById("rangoOpacidad");

    let tamañoActual = 25; // valor inicial
    //aumentamos tamaño de letra
    btnAumentar.onclick = () => {
        tamañoActual += 2;
        texto.style.fontSize = `${tamañoActual}px`;
    };
    btnReducir.onclick = () => {
        //reducimos tamaño de letra
        tamañoActual = Math.max(14, tamañoActual - 2);
        texto.style.fontSize = `${tamañoActual}px`;
    };

    rangoOpacidad.oninput = () => {
        //controlamos opacidad
        texto.style.backgroundColor = `rgba(221, 241, 237, ${rangoOpacidad.value})`;
    };
}
window.mostrarCuento = mostrarCuento; //linea necesaria para que ande la funcion debido a que tenemos 2 archivos js

window.mostrarFormulario = mostrarFormulario;//linea necesaria para que ande la funcion debido a que tenemos 2 archivos js

function mostrarFormulario() {
    // Crear el modulo con el formulario
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

    // Cerrar modulo
    document.getElementById("cerrarmodulo").onclick = () => modulo.remove();

    // Manejar envío del formulario
    document.getElementById("formCuento").onsubmit = (e) => {
        e.preventDefault();
        alert("¡Gracias por tu recomendación! ");
        modulo.remove();
    };
}
window.abrirRegistro = abrirRegistro;//linea necesaria para que ande la funcion debido a que tenemos 2 archivos js
function abrirRegistro(){

    const modulo = document.createElement("div");
    modulo.id = "moduloFormulario";
    modulo.innerHTML =`
        <div class="modulo-fondo">
            <div class="modulo-caja">
                <h2>Registrarse</h2>
                <form id="formCuento">
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
document.getElementById("formCuento").onsubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por registrarse!");
    modulo.remove();
};
}
// Asegurarse que se ejecute al cargar la página







// sera comentario de 1 linea y /* */ de muchas
//var es una opcion global y let es una forma local ,existen variables String (necesita "" ), boolean (true/false), numericas, , arreglos, null, undefined, object, etc.
// Todas ellas son dinamicas (es decir , pueden cambiar su tipo durante el transcurso del programa) exceptuando las constantes , estas no pueden modificar su tipo

// como operadores podemos encontrar  = asignacion
// operadores aritmeticos : +  -   /   %(modulo)   **(potencia)
// ++ / --  aumenta o disminuye valor en 1 .  +=  X/ -= X  aumenta o disminuye el valor en X cantidad
// **= X potencia la variable en X . *= Xmultiplica la variable en X . /= X divide la variable en X
// comparadores :   >=    ==  <=   !=   >   <
// funciones : math es una clase que contiene funciones matematicas  dentro de ella
//math.round(399.53)  redondea a entero teniendo en cuenta 0,5. /   Math.ceil(299.4) redondea sin importal el cecimal hacia arriba / Math.floor (500.9) redondea hacia abajo
// math.sin (45),calcula el seno de un angulo / math.cos ()  coseno / math.tang () tangente
// math.exp() exponencial de un numero / math.log ()
// math.sqrt () raiz de un numero
//math.abs () valor absoluto / math.max (10,123,412,5) obtiene el maximo / math.min(1340,51,24) obtiene el minimo
// math.random ()   trae un valor aleatorio  / math.Random ()*5  aleatorio hasta 5

// funciones de string :  palabra.length () cantidad de letras , palabra.slice(0,4) ve caracteres del 0 a 4 , palabra.substring(0,5) trae el substring de 0 a5
// palabra.replace('aaaa',  'bbbb') reemplaza la subcadena aaaa de una palabra por bbbb / palabra.toUpperCase() mayusculas / palabra.toLowerCase() minuscula
// palabra.concat(palabra2) une 2 palabras  / palabra.trimStart() quita los espacios del lado izquierdo / palabra.trimEnd () quita los dela derecha / palabra.trim() ambos lados
// palabra.split ('a') corta cuando encuentre a

// arrays  en js  :  declaracion  let arr = []
// numeros = [15,5678,187,5,1,-1,1] para mostrarlos solo debo mostrar arr sin una repetitiva
// numeros [0]  selecciona pos 0  y para cambiarlo numeros [0]=23
// numeros.length () cantidad de posiciones  .
// numeros.toString()  pasa todos los valores a String
// numeros.concat(letras)  une 2 arreglos distintos
// numero.pop() borra el ultimo elemento  / agregar un elemento al final numeros.push (13)
// elimina primer elemento  numeros.shift()  / agregar al inicio numeros.unshift (123)
// numeros.splice(2,3) borra desde la posicion 2 , 3 elementos.   frutas.sort() ordena alfabeticamente , frutas.reverse() los pone al reves

// Operadores logicos :  &&  and   ,  || or
//for ( let f in palabra) {funciona para arreglos o strings y es lo mismo que desde 0 hasta el tamaño de la variable palabra ++ }
// funcionan los break y continue
// las funciones se declaran como : function nombre(valor1 , valor2) { y si necesito que si o si sean enteros uso el parseInt(valor1)}
/* un objeto se crea como :  var NombreObjeto= {atributo1: ... , atributo2: .... , atributo3: ....}
// class Persona{  }
// const homero = new Persona();

//class date  :    const fechaactual= new Date();
       // let fecha = new Date(); fecha.

//FORMULARIOS EN HTML :  para trabajar con fomularios en js se utilizan  modelo de objetos de documentos (DOM)
permite acceder y manipular elementos htmls a travez de js . tenemos que crear un formulario en html
<form>
<input type="button" value="Incrementar" onclick=" incrementar()" </input>
</form>
<script>
let contador=0 ;
function incremetar() {
contador++;
alert ('valor: ' + contador) ;
}
</script>



const pruebaDeConstante =200 ;
var pruebaDeTexto = "Pixel-y-plumas1";
let pruebaDeTextoFijo = "Pixel-y-plumas2";
let pruebaDeObjeto = {nombre: 'la cosa' , durabilidad:30 }

//de esta forma podemos escribir en nuestro html
document.write(pruebaDeTexto);
document.write ('<br>'); //salto de linea   otra forma es dentro de la creacion de la variable utilizar " \ "
document.write(pruebaDeTextoFijo);
document.write ('<br>');
document.write (pruebaDeObjeto.nombre + ' ' + pruebaDeObjeto.durabilidad);
//  + ' ' + es una forma de concatener valores , si no simplemente con  " ,"


// Para recibir valores a travez de un formulario proporcionado por js
let nombre = prompt ('INGRESE SU NOMBRE ') ;
let edad = prompt ('ingrese su edad');
// como el usuario puede ingresar algo incorrecto existe    edad= parseInt( promt('Ingrese la edad'))
document.write (nombre ,edad)


*/
