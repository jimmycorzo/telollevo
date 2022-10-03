import { ShellModel } from 'app/shell/data-store';
import { ClasesModel } from 'app/models/clases.model';

export class MisClasesModel extends ShellModel {
    claseId: string;
    tiendaId: string;
    id: string;
    clase: ClasesModel;

    constructor() {
        super();
    }
}
