import { ShellModel } from 'app/shell/data-store';

export class ClasificacionesModel extends ShellModel {
    id: string;
    clasificacion: string;
    imagen: string;
    activa: boolean;
    tipoclasificaciones: string;

    constructor() {
        super();
    }
}
