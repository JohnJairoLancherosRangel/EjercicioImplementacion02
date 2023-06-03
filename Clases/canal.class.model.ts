import { Plataforma } from "./plataforma.class.model.js";
import { Stream } from "./stream.class.model.js";
import { Streamer } from "./streamer.class.model.js";

export class Canal{

    public NombreCanal:string="";
    public Banner:string = "";
    public Descripcion:string="";
    public Plataforma:Plataforma;
    public Streams:Stream[]=[];
    public Streamer:Streamer;

    constructor(i_NombreCanal:string,i_Banner:string,i_Descripcion:string,i_Plataforma:Plataforma,i_Streamer:Streamer){
        this.NombreCanal=i_NombreCanal;
        this.Banner=i_Banner;
        this.Descripcion=i_Descripcion;
        // RELACIÓN 1 (CANAL --> PLATAFORMA)
        this.Plataforma=i_Plataforma;
        // RELACION 1  (CANAL --> STREAMER)
        this.Streamer=i_Streamer;
    }

    // IMPLEMENTACIÓN METODO 11() AGREGAR UN STREAMER
    agregarStreamer(i_Streamer:Streamer){
        this.Streamer = i_Streamer;
    }

    // IMPLEMENTACIÓN METODO 12() AGREGAR UN STREAM
    agregarStream(i_Stream:Stream){
        this.Streams.push(i_Stream);
    }

    // IMPLEMENTACIÓN METODO 4() MOSTRAR DETALLE DE UN CANAL
    mostrarDetalle(){
        console.log("--------------- DETALLE DEL CANAL ---------------");
        console.log("El Nombre del Canal Es: " + this.NombreCanal);
        console.log("El Banner del Canal Es: " + this.Banner);
        console.log("La Descripción del Canal Es: " + this.Descripcion);
        console.log("La Plataforma del Canal Es: " + this.Plataforma.Nombre);
        this.mostrarStreams();       
        console.log("El Streamer del Canal Es: " + this.Streamer.Nombre);
        
    }

    mostrarStreams(){

        console.log("Los Streams Del Canal Son: ");
        for (let index = 0; index < this.Streams.length; index++) {
            const element = this.Streams[index];
            console.log("Stream " + (index+1));
            console.log("Nombre del Stream: " + element.Nombre);
            console.log("Fecha del Stream: " + element.Fecha);
            
        }
    }

    
}