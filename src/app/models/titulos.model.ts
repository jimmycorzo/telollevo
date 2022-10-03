import { Observable } from "rxjs";

export class TitulosModel {
  productoId: string;
  titulo: string;
  seleccionado: string;
  seleccionadores: Array<SeleccionadoresModel> = [];

  constructor() {
  }
}

export class SeleccionadoresModel {
  id: string;
  adicional: number;
  seleccionador: string;
  seleccionado: boolean;
  name: string;

  constructor() {
  }
}

export class PedidosModel {
  id: string;
  tiendaId: string;
  fecha: string;
  pedido: string;
  activo: boolean;
  telefono: boolean;
  pago: string;
  direccion: string;
  cancelado: string;
  elaborado: string;
  entregado: string;

  constructor() {
  }
}
