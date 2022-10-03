import { ShellModel } from 'app/shell/data-store';

export class LinksModel extends ShellModel {
    id: string;
    link: string;
    imagen: string;
    posicion: number;

    constructor() {
        super();
    }
}
