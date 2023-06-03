import { Canal } from "./canal.class.model.js";
import { Categoria } from "./categoria.class.model.js";
import { Streamer } from "./streamer.class.model.js";

export class Stream{

    public Nombre:string="";
    public Fecha:string="";
    public Categorias:Categoria[]=[];
    public CanalStream:Canal;
    public StreamerStream:Streamer;

    constructor(i_Nombre:string,i_Fecha:string,i_Categoria:Categoria,i_CanalStream:Canal,i_StreamerStream:Streamer){
            this.Nombre=i_Nombre;
            this.Fecha=i_Fecha;

            // REALACION 1..* (STREAM --> CATEGORIA)
            this.Categorias.push(i_Categoria);
            // RELACION 1 (STREAM --> CANAL)
            this.CanalStream=i_CanalStream;
            // RELACION 1 (STREAM --> STREAMER)
            this.StreamerStream=i_StreamerStream;


            // RELACION 1..* (STREAMER --> STREAM)
           // this.StreamerStream.Streams.push(this);
            // RELACION 1..* (CANAL --> STREAM)
            //this.CanalStream.Streams.push(this);
    }

    agregarCategoria(i_Categoria:Categoria){
        this.Categorias.push(i_Categoria);
    }

    // IMPLEMENTACIÓN METODO 8() MOSTRAR EL DETALLE DE UN STREAM

    detalleStream(){

        console.log("El Nombre del Stream Es: " + this.Nombre);
        console.log("La Fecha del Stream Es: " + this.Fecha);
        this.mostrarCategoriasStream();
        console.log("El Canal del Stream Es: " + this.CanalStream.NombreCanal);
        console.log("El Streamer del Stream Es: " + this.StreamerStream.Nombre);
       
    }

    mostrarCategoriasStream(){

        console.log("Las Categorias Del Stream Son: ")
        for (let index = 0; index < this.Categorias.length; index++) {
            const element = this.Categorias[index];
            console.log("* " + element.Nombre);           
        }

    }
}