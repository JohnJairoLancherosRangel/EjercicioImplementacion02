import { Plataforma } from "./plataforma.class.model.js";

export class Empresa{

    public Nombre:string = "";
    public NIT:string="";
    public Patrocinios:Plataforma[]=[];

    constructor(i_Nombre:string,i_NIT:string){
        this.Nombre=i_Nombre;
        this.NIT=i_NIT;
    }

    // IMPLEMENTACIÓN METODO 9() AGREGAR UNA PLATAFORMA
    // RELACIÓN DE AGREGACIÓN * (EMPRESA --> PLATAFORMA)
    agregarPlataforma(i_Plataforma:Plataforma){
        this.Patrocinios.push(i_Plataforma);
    }

    // MÉTODO 1 () MOSTRAR EL LISTADO DE PLATAFORMAS
    mostrarPatrocinios(){
        
        console.log("Listado de Plataformas Patrocinadas por la Empresa " + this.Nombre+" :");
        for (let index = 0; index < this.Patrocinios.length; index++) {
            const element = this.Patrocinios[index];
            console.log("* " + element.Nombre);
        }

    }
    
}