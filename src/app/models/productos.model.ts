import { ShellModel } from '../shell/data-store';

export class ProductosModel extends ShellModel {
    id: string;
    producto: string;
    imagen: string;
    posicion: number;
    claseId: string;
    cantidad: number;
    descripcion: string;
    presentacion: number;
    unidad: string;
    presentacionTxt: string;

    constructor() {
        super();
    }
}
