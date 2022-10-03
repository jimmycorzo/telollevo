import { ShellModel } from '../shell/data-store';

export class CategoriasModel extends ShellModel {
    id: string;
    categoria: string;
    imagen: string;
    posicion: number;
    activa: boolean;
    size: string;

    constructor() {
        super();
    }
}
