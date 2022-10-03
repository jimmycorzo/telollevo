import { ShellModel } from '../shell/data-store';

export class SucursalesModel extends ShellModel {
  id: string;
  zonaId: string;
  sucursal: string;
  latitud: number;
  longitud: number;
  basica: number;
  basicaMinimo: number;
  basicaHasta: number;
  urgente: number;
  urgenteMinimo: number;
  urgenteHasta: number;
  extra: number;
  extraMinimo: number;
  extraHasta: number;
  adicional: number;
  constructor() {
    super();
  }
}
