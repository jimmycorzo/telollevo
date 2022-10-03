import { ShellModel } from '../shell/data-store';

export class HorariosModel extends ShellModel {
  id: string;
  dia: number;
  desde: string;
  hasta: string;
  tiendaId: string;
  constructor() {
    super();
  }
}
