import { ShellModel } from '../shell/data-store';

export class DirectoriosModel extends ShellModel {
    id: string;
    directorio: string;
    imagenes: Array<string>;
    clasificaciones: Array<string>;
    correo: string;
    detalle: string;
    ciudad: string;
    direccion: string;
    telefono: string;
    web: string;
    whatsapp: string;
    vence: string;
    precio: number;
    activo: boolean;

    constructor() {
        super();
    }
}
