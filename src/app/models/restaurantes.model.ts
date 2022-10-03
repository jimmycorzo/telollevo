import { HorariosModel } from 'app/models/horarios.model';
import { ShellModel } from '../shell/data-store';

export class RestaurantesModel extends ShellModel {
    id: string;
    tienda: string;
    imagen: string;
    posicion: number;
    activa: boolean;
    categoria: string;
    correo: string;
    politica: string;
    telefono: string;
    direccion: string;
    tamano: number;
    mishorarios: HorariosModel
    cerrada: boolean;
    proximamente: boolean;

    constructor() {
        super();
    }
}
