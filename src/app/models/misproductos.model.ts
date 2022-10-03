import { ShellModel } from '../shell/data-store';
import { TiendasModel } from 'app/models/tiendas.model';
import { SeleccionadoresModel, TitulosModel } from 'app/models/titulos.model';

export class MisProductosModel extends ShellModel {
    id: string;
    precio: number;
    productoId: string;
    descuento: number;
    desde: string;
    hasta: string;
    precioVlr: number;
    descuentoVlr: number;
    cantidad: number;
    descuentoPorc: number;
    activo: boolean;
    agotado: boolean;
    producto: string;
    imagen: string;
    descripcion: string;
    presentacion: number;
    unidad: string;
    ref: string;
    productoArray: Array<string>;
    presentacionTxt: string;
    tiendaId: string;
    tienda: TiendasModel;
    amount: number = 0;
    observaciones: string;
    titulos: Array<TitulosModel>;
    constructor() {
        super();
    }
}
