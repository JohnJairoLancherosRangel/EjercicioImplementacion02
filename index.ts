
import { Canal } from "./Clases/canal.class.model.js";
import { Categoria } from "./Clases/categoria.class.model.js";
import { Empresa } from "./Clases/empresa.class.model.js";
import { Plataforma } from "./Clases/plataforma.class.model.js";
import { RedSocial } from "./Clases/redSocial.class.model.js";
import { Stream } from "./Clases/stream.class.model.js";
import { Streamer } from "./Clases/streamer.class.model.js";

//1. Mostrar el listado de plataformas
const Amazon = new Empresa("Amazon","9045563");
const Twitch = new Plataforma("Twitch TV","https://es.wikipedia.org/wiki/Twitch#/media/Archivo:Twitch.jpg",
"Es una plataforma estadounidense perteneciente a la empresa Amazon, Inc., que permite realizar transmisiones en vivo.",Amazon);

//9. Agregar una plataforma
Amazon.agregarPlataforma(Twitch);

    // Mostrar el listado de plataformas
console.log("-----------------------------------------------");
Amazon.mostrarPatrocinios();

//3. Mostrar el listado de canales
const JW = new Streamer("Jordi Wild", "Giorgio", "Más conocido como Jordi Wild o Giorgio, es un youtuber, podcaster, actor, escritor, músico y modelo español.");
const TWP = new Canal("The Wild Project","https://yt3.googleusercontent.com/ytc/AGIKgqPt-8adQY7673XTElkb-bYKWeUfGGmsKVd7OTTt1Q=s900-c-k-c0x00ffffff-no-rj",
"es un podcast de vídeo y audio conducido por Jordi Wild, youtuber de éxito con más de 11 millones de suscriptores en YouTube y un alcance de más de mil millones de visualizaciones.",
Twitch,JW);

//7. Mostrar el listado de streams
const Entretenimiento = new Categoria("Entretenimiento","Temas en General","https://previews.123rf.com/images/yupiramos/yupiramos1606/yupiramos160609533/58473192-dise%C3%B1o-de-entretenimiento-cine-ejemplo-gr%C3%A1fico-del-vector-eps10.jpg");
const Stream01 = new Stream("Inauguración PD 01","03/06/2023",Entretenimiento,TWP,JW);

//8. Mostrar el detalle de un stream
console.log("-----------------------------------------------");
Stream01.detalleStream();

//12. Agregar un stream
TWP.agregarStream(Stream01);

    //Mostrar el listado de streams
console.log("-----------------------------------------------");
TWP.mostrarStreams();

//10. Agregar un canal
Twitch.agregarCanal(TWP);

// Mostrar el listado de canales
console.log("-----------------------------------------------");
Twitch.mostrarCanales();

//11. Agregar un streamer
TWP.agregarStreamer(JW);

//5. Mostrar el listado de streamers
console.log("-----------------------------------------------");
Twitch.mostrarStreamers();

//4. Mostrar el detalle de un canal
console.log("-----------------------------------------------");
TWP.mostrarDetalle();

//13. Agregar un canal a un streamer
JW.agregarCanal(TWP);

//14. Agregar un stream a un streamer
JW.agregarStram(Stream01);

//AGREGANDO RED SOCIAL AL STREAMER
const FB = new RedSocial("FaceBook","https://www.facebook.com/JordiWild");
JW.agregarRedSocial(FB);

//2. Mostrar el detalle de una plataforma
console.log("-----------------------------------------------");
Twitch.detallePlataforma();

//6. Ver el detalle de un streamer
console.log("-----------------------------------------------");
JW.detalleStreamer();