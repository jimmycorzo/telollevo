import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TiendasModel } from 'app/models/tiendas.model';
import { FirebaseService } from '@app/services/Firebase.service';
import { DataStore } from 'app/shell/data-store';

@Injectable()
export class TiendasResolver implements Resolve<any> {

    constructor(private firebaseService: FirebaseService) { }

    resolve() {
        const dataSource: Observable<Array<TiendasModel>> = this.firebaseService.getTiendasDataSource('tiendas');

        const dataStore: DataStore<Array<TiendasModel>> = this.firebaseService.getTiendasStore('tiendas', dataSource);

        return dataStore;
    }
}
