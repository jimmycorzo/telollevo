import { ShellModel } from '../shell/data-store';

export class DispositivosModel extends ShellModel {
  correo: string;
  dispositivoId: string;
  telefono: string;
  uid: string;

  constructor() {
    super();
  }
}
