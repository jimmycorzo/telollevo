import { ShellModel } from 'app/shell/data-store';

export class ClasesModel extends ShellModel {
    id: string;
    clase: string;
    imagen: string;
    posicion: number;
    departamentoId: string;

    constructor() {
        super();
    }
}
