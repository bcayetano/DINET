export interface IProducto {
    id: number;
    nombre: string;
    precio: number;
    fechaCreacion: Date;
}

export class Producto implements IProducto {
    id!: number;
    nombre!: string;
    precio!: number;
    fechaCreacion!: Date;
}