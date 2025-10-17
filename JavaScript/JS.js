function agregarLibro(){
let cuentos = [
    {img:"imagenes/BlancaNievesYlos7enanitos.png",nombre: "Blancanieves y los 7 enanitos"
            ,descripcion:"👑 Una princesa valiente, siete amiguitos y una manzana envenada"},
    {img:"imagenes/CaperucitaRoja.png",nombre: "Caperucita Roja"
            ,descripcion:"🌲 Una niña con capa roja y un lobo astuto en un bosque lleno de sorpresas."},
    {img:"imagenes/Cenicienta.png",nombre: "Cenicienta"
            ,descripcion:"✨ Una joven con un zapato de cristal que le cambiará su vida para siempre."},
    {img:"imagenes/ElGatoConBotas.png",nombre: "El gato con botas"
            ,descripcion:"🐾 Un gato ingenioso con botas mágicas que puede convertir la suerte en aventuras."},
    {img:"imagenes/ElPatitoFeo.png",nombre: "El patito feo"
            ,descripcion:"🦢 Un pequeño patito que descubre lo especial que es al crecer."},
    {img:"imagenes/LaBellaDurmiente.png",nombre: "La bella durmiente"
            ,descripcion:"🌹 Una princesa encantada que duerme hasta que el verdadero amor la despierte."},
    {img:"imagenes/LosTresChanchitos.png",nombre: "Los tres chanchitos"
            ,descripcion:"🏠 Tres hermanos chanchitos construyen sus casitas para enfrentarse al gran lobo feroz."},
    {img:"imagenes/HanselyGretel.png",nombre: "Hansel y Gretel"
            ,descripcion:"Dos hermanos son abandonados en el bosque y encuentran una casa hecha de dulces, donde una bruja los captura. ¿Logran escapar?"},
    {img:"imagenes/Rapunzel.png",nombre: " Rapunzel"
            ,descripcion:"Una joven encerrada por una bruja en lo alto de una torre deja caer su cabello para que un príncipe suba a rescatarla."},
    {img:"imagenes/Lasirenita.png",nombre: "La sirenita"
            ,descripcion:"Una sirena anhela convertirse en humana para estar con el príncipe que ama, sacrificando su voz "},
    {img:"imagenes/Laprincesayelguisante.png",nombre: "La princesa y el guisante"
            ,descripcion:"Una princesa es puesta a prueba colocando un guisante bajo 20 colchones. Solo una verdadera princesa puede sentirlo."},
    {img:"imagenes/ElFlautistaDeHamelín.jpeg",nombre: "El flautista de Hamelín"
            ,descripcion:"Un misterioso flautista libera una ciudad de ratas con su música, pero al no recibir pago, se lleva a los niños."},
    {img:"imagenes/Lacigarraylahormiga.jpeg",nombre: "La cigarra y la hormiga"
            ,descripcion:"Una hormiga previsora trabaja mientras la cigarra canta todo el verano. En invierno, la cigarra sufre por no haber guardado alimento."},
    {img:"imagenes/Aladin.jpeg",nombre: "Aladin"
            ,descripcion:"Un joven humilde encuentra una lámpara que contiene a un genio capaz de conceder deseos, cambiando su destino."},
    {img:"imagenes/labellaylabestia.jpeg",nombre: "La bella y la bestia"
            ,descripcion:"Una joven llamada Bella se ofrece a vivir en un castillo con una Bestia para salvar a su padre."},
    {img:"imagenes/Ellibrodelaselva.png",nombre: "El libro de la selva"
            ,descripcion:"Un niño criado por lobos en la selva. Guiado por sus amigos Baloo y Bagheera, debera aprender las leyes de la selva" },
    {img:"imagenes/PeterPan.png",nombre: "Peter Pan"
            ,descripcion:"Un niño que se niega a crecer y vive en la isla de Nunca Jamás, donde junto al hada Campanita y los Niños Perdidos, vive aventuras con el Capitán Garfio y su banda de piratas "},
    {img:"imagenes/ElCascanueces.png",nombre: "El Cascanueces"
            ,descripcion:"Una niña recibe un Cascanueces de madera por Navidad, que cobra vida mágicamente"}
];




    for(let i =0; i<cuentos.length; i++){
    
    document.getElementById("cuentos").innerHTML += `
        <div class="Libro">
        <img class="PortadaDeLibro" src=${cuentos[i].img}>
        <span class="NombreCuento">${cuentos[i].nombre}.</span>
        <span class="Descripcion">${cuentos[i].descripcion}.</span>
        </div>`;
    
    }
}

window.onload = agregarLibro;