import { ShellModel } from '../shell/data-store';

export class DatosModel extends ShellModel {
    id: string;
    uid: string;
    tipo: string;
    numero: string;
    nombre: string;
    direccion: string;
    pais: string;
    telefono: string;
    nequi: string;
    correo: string;
    constructor() {
        super();
    }
}
