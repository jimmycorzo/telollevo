import { ShellModel } from 'app/shell/data-store';

export class CuentasModel extends ShellModel {
  id: string;
  cuenta: string;
  banco: string;
  sucursal: string;
  ahorros: boolean;
  activa: boolean;
  posicion: number;
  url: string;

  constructor() {
    super();
  }
}
