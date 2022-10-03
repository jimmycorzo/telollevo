import { ShellModel } from '../shell/data-store';

export class UsuariosModel extends ShellModel {
  id: string;
  usuario: string;
  foto: string;
  activo: boolean;
  fecha: string;
  correo: string;
  identificacion: string;
  telefono: string;
  tiendaId: string;
  tipo: string;
  notificaciones: boolean;
  uid: string;

  constructor() {
    super();
  }
}
