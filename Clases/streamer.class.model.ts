import { Canal } from "./canal.class.model.js";
import { RedSocial } from "./redSocial.class.model.js";
import { Stream } from "./stream.class.model.js";

export class Streamer{

    public Nombre:string="";
    public NickName:string="";
    public Descripcion:string="";
    public RedesSociales:RedSocial[]=[];
    public Streams:Stream[]=[];
    public Canales:Canal[]=[];

    constructor(i_Nombre:string,i_NickName:string,i_Descripcion:string){
            this.Nombre=i_Nombre;
            this.NickName=i_NickName;
            this.Descripcion=i_Descripcion;
    }
    
    // RELACION * (STREAMER --> REDSOCIAL)
    agregarRedSocial(i_RedSocial:RedSocial){
        this.RedesSociales.push(i_RedSocial);
    }

    //LA RELACION 1..* (STREAMER --> STREAM) SE CONTROLA EN EL CONSTRUCTOR DE LA CLASE STREAM

    // IMPLEMENTACIÓN METODO 6() DETALLE DE UN STREAMER

    detalleStreamer(){

        console.log("El Nombre del Streamer Es: " + this.Nombre);
        console.log("El NickName del Streamer Es: " + this.NickName);
        console.log("La Descipción del Streamer Es: " + this.Descripcion);
        this.mostrarRedes();
        this.streamsEmitidos();

    }

    mostrarRedes(){
        console.log("Las Redes Sociales Son: ")
        for (let index = 0; index < this.RedesSociales.length; index++) {
            const element = this.RedesSociales[index];
            console.log("* Nombre: " + element.Nombre + " Url: " + element.Url);           
        }
    }

    // IMPLEMENTACIÓN METODO 7() MOSTRAR EL LISTADO DE STREAMS

    streamsEmitidos(){
        
        console.log("Los Streams Que Han Sido Emitidos Son: ")
        for (let index = 0; index < this.Streams.length; index++) {
            const element = this.Streams[index];
            console.log("* Nombre Stream: " + element.Nombre + " Fecha Stream: " + element.Fecha);           
        }
    }

    // IMPLEMENTACIÓN METODO 13() AGREGAR UN CANAL A UN STREAMER
    agregarCanal(i_Canal:Canal){
        this.Canales.push(i_Canal);
    }

    // IMPLEMENTACIÓN METODO 14() AGREGAR UN CANAL A UN STREAMER
    agregarStram(i_Stream:Stream){
        this.Streams.push(i_Stream);
    }
}