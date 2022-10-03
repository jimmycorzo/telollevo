import { ShellModel } from 'app/shell/data-store';

export class ServiciosModel extends ShellModel {
    id: string;
    servicio: string;
    imagenes: Array<string>;
    correo: string;
    detalle: string;
    ciudad: string;
    direccion: string;
    telefono: string;
    web: string;
    whatsapp: string;
    vence: string;
    posicion: number;
    precio: number;
    activo: boolean;

    constructor() {
        super();
    }
}
