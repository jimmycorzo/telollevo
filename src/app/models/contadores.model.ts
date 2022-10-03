import { ShellModel } from '../shell/data-store';

export class ContadoresModel extends ShellModel {
  id: string;
  tipo: string;
  sucursalId: string;
  contador: number;

  constructor() {
    super();
  }
}
