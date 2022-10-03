import { ShellModel } from '../shell/data-store';
import { TiendasModel } from '../tiendas/tiendas.model';

export class HorarioModel extends ShellModel {
  id: string;
  dia: number;
  desde: string;
  hasta: string;
  tiendaId: string;
  constructor() {
    super();
  }
}
