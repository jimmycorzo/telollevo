import { ShellModel } from 'app/shell/data-store';

export class DireccionesModel extends ShellModel {
  id: string;
  uid: string;
  direccion: string;
  detalle: string;
  telefono: string;
  distancia: number;
  duracion: number;
  latitud: number;
  longitud: number;

  constructor() {
    super();
  }
}
