import { ShellModel } from 'app/shell/data-store';

export class DepartamentosModel extends ShellModel {
    id: string;
    departamento: string;
    posicion: number;

    constructor() {
        super();
    }
}
