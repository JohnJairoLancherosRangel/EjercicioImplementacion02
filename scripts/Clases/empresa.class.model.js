export class Empresa {
    constructor(i_Nombre, i_NIT) {
        this.Nombre = "";
        this.NIT = "";
        this.Patrocinios = [];
        this.Nombre = i_Nombre;
        this.NIT = i_NIT;
    }
    // IMPLEMENTACIÓN METODO 9() AGREGAR UNA PLATAFORMA
    // RELACIÓN DE AGREGACIÓN * (EMPRESA --> PLATAFORMA)
    agregarPlataforma(i_Plataforma) {
        this.Patrocinios.push(i_Plataforma);
    }
    // MÉTODO 1 () MOSTRAR EL LISTADO DE PLATAFORMAS
    mostrarPatrocinios() {
        console.log("Listado de Plataformas Patrocinadas por la Empresa " + this.Nombre + " :");
        for (let index = 0; index < this.Patrocinios.length; index++) {
            const element = this.Patrocinios[index];
            console.log("* " + element.Nombre);
        }
    }
}
