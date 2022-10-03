import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { FirebaseService } from 'app/services/firebase.service';

@Injectable()
export class DireccionesResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve() {
    // Base Observable (where we get data from)
    const dataObservable = this.firebaseService.getDirecciones();

    return { source: dataObservable };
  }
}
