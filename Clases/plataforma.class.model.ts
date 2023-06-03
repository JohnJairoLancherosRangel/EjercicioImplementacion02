import { Canal } from "./canal.class.model.js";
import { Empresa } from "./empresa.class.model.js";

export class Plataforma{

    public Nombre:string = "";
    public Logo:string="";
    public Descripcion:string="";
    public Patrocinador: Empresa;
    // RELACIÓN 1..*  (PLATAFORMA --> CANAL)
    public Canales:Canal[]=[];

    constructor(i_Nombre:string,i_Logo:string,i_Descripcion:string,i_Patrocinador:Empresa){
            this.Nombre=i_Nombre;
            this.Logo=i_Logo;
            this.Descripcion=i_Descripcion;
            // RELACION 1  (PLATAFORMA --> EMPRESA)
            this.Patrocinador = i_Patrocinador;
            
    }

    cambiarPatrocinador(i_Patrocinador:Empresa){
        this.Patrocinador = i_Patrocinador;
    }

    // IMPLEMENTACIÓN METODO 10() AGREGAR UN CANAL
    agregarCanal(i_Canal:Canal){
        this.Canales.push(i_Canal);
    }

    // IMPLEMENTACIÓN METODO () MOSTRAR DETALLE DE PLATAFORMA
    detallePlataforma(){

        console.log("--------------- DETALLE DE LA PLATAFORMA ---------------");
        console.log("El Nombre de la Plataforma Es: " + this.Nombre);
        console.log("El Logo de la Plataforma Es :" + this.Logo);
        console.log("La Descripción de la Plataforma Es :" + this.Descripcion);
        console.log("La Empresa que Patrocina la Plataforma Es: " + this.Patrocinador.Nombre);
        this.mostrarCanales();
        
    }

    // IMPLEMENTACIÓN METODO () LISTADO DE CANALES
    mostrarCanales(){
        if(this.Canales.length!=0){
            console.log("Los Canales Que Hacen Parte de la Plataforma Son: ");
             for (let index = 0; index < this.Canales.length; index++) {
                 const element = this.Canales[index];
                 console.log("* " + element.NombreCanal)
             }
         }else{
             console.log("No Hay Canales Registrados en la Plataforma!");
         }
    }

    // IMPLEMENTACIÓN METODO 5() MOSTRAR EL LISTADO DE STREAMERS
    mostrarStreamers(){

        console.log("Los Streamers de la Plataforma Son: ");
        if(this.Canales.length!=0){
                
            for (let index = 0; index < this.Canales.length; index++) {
                const element = this.Canales[index];
                console.log("* " + element.Streamer.Nombre);
            }

        }else{
            console.log("No Hay Streamers Por Mostrar, No Hay Canales Añadidos a la Plataforma!");
        }
    }
}