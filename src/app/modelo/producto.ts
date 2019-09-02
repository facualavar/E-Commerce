export class Producto {

    id: number;
    nombre: string;
    img: string;
    img2: string;
    img3: string;
    descripcion: string;
    categoria: string;
    marca: string;
    precio: number;
    caracteristicas: string;
    stock: number;

    constructor(nomb:string, img:string, img2:string, img3:string, descrip:string, cat:string, marca:string, pre:number, caracteristicas:string, stock:number){

        this.nombre = nomb;
        this.img = img;
        this.img2 = img;
        this.img3 = img;
        this.descripcion = descrip;
        this.categoria = cat;
        this.marca = marca;
        this.precio = pre;
        this.caracteristicas = caracteristicas;
        this.stock = stock;
    }
}