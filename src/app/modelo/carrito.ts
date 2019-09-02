import { Producto } from './producto';
export class Carrito{

    items: Array<Item> =[];
    total:number;

    constructor(items: Array<Item>, tot:number){
        this.items = items;
        this.total = tot;
    }
    
}

export class Item{
    producto: Producto;
    cantidad: number;
    subtotal: number;

    constructor(prod: Producto, cant: number, sub:number){
        this.producto = prod;
        this.cantidad = cant;
        this.subtotal = sub;
    }
}