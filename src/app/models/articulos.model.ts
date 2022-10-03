import { ShellModel } from '../shell/data-store';

export class ArticulosModel extends ShellModel {
  id: string;
  tiendaId: string;
  pedidoId: string;
  tienda: string;
  productoId: string;
  producto: string;
  precio: number;
  presentacion: string;
  cantidad: number;
  imagen: string;
  observaciones: string;
  detalle: string;

  constructor() {
    super();
  }
}
