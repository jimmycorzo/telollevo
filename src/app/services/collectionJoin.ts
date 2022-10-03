import { collection, CollectionReference, Firestore, query, where, collectionData } from '@angular/fire/Firestore';

import { combineLatest, pipe, of, defer } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CategoriasModel } from 'app/models/categorias.model';
import { TiendasModel } from 'app/models/tiendas.model';
import { ClasesModel } from 'app/models/clases.model';
import { HorariosModel } from 'app/models/horarios.model';

export const leftJoinClases = (
  afs: Firestore,
  field,
  collection1,
  limit = 100
) => {
  return source =>
    defer(() => {
      // Operator state
      let collData;

      // Track total num of joined doc reads
      let totalJoins = 0;

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;

          // Save the parent data state
          collData = data as any[];

          const reads$ = [];
          for (const doc of collData) {
            // Push doc read to Array

            if (doc[field]) {
              // Perform query on join key, with optional limit
              const q = ref => ref.where('id', '==', doc[field]).limit(limit);

              reads$.push((collectionData<ClasesModel>(
                query<ClasesModel>(
                  collection(afs, collection1) as CollectionReference<ClasesModel>,
                  where('id', '==', doc[field])
                ), { idField: 'id' }
              ))
                .pipe(
                  map(f => f[0])
                ));
            } else {
              reads$.push(of([]));
            }
          }

          return combineLatest(reads$);
        }),
        map(joins => {
          return collData.map((v, i) => {
            // totalJoins += joins[i].length;
            const value = { ...v, [collection1]: joins[i] || null };
            return value.clases;
          });
        }),
        tap(final => {
          console.log(
            `Queried ${(final as any).length}, Joined ${totalJoins} docs`
          );
          totalJoins = 0;
        })
      );
    });
};

export const leftJoinProductos = (
  afs: Firestore,
  field,
  collection1,
  limit = 100
) => {
  return source =>
    defer(() => {
      // Operator state
      let collData;

      // Track total num of joined doc reads
      let totalJoins = 0;

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;

          // Save the parent data state
          collData = data as any[];

          const reads$ = [];
          for (const doc of collData) {
            // Push doc read to Array

            if (doc[field]) {
              // Perform query on join key, with optional limit
              const q = ref => ref.where('id', '==', doc[field]).limit(limit);

              reads$.push((collectionData(
                query<any>(
                  collection(afs, collection1) as CollectionReference<any>,
                  where('id', '==', doc[field])
                ), { idField: 'id' }
              ))
                .pipe(
                  leftJoinCategorias(afs, 'categoriaId', 'categorias'),
                  map(f => f[0])
                ));
            } else {
              reads$.push(of([]));
            }
          }

          return combineLatest(reads$);
        }),
        map(joins => {
          return collData.map((v, i) => {
            //totalJoins += joins[i].length;
            const value = { ...v, [collection1]: joins[i] };
            return value;
          });
        }),
        tap(final => {
          console.log(
            `Queried ${(final as any).length}, Joined ${totalJoins} docs`
          );
          totalJoins = 0;
        })
      );
    });
};

export const leftJoinCategorias = (
  afs: Firestore,
  field,
  collection1,
  limit = 100
) => {
  return source =>
    defer(() => {
      // Operator state
      let collData;

      // Track total num of joined doc reads
      let totalJoins = 0;

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;

          // Save the parent data state
          collData = data as any[];

          const reads$ = [];
          for (const doc of collData) {
            // Push doc read to Array

            if (doc[field]) {
              // Perform query on join key, with optional limit
              reads$.push((collectionData<CategoriasModel>(
                query<CategoriasModel>(
                  collection(afs, collection1) as CollectionReference<CategoriasModel>,
                  where('id', '==', doc[field])
                ), { idField: 'id' }
              ))
                .pipe(
                  map(f => f[0])
                ));
            } else {
              reads$.push(of([]));
            }
          }

          return combineLatest(reads$);
        }),
        map(joins => {
          return collData.map((v, i) => {
            // totalJoins += joins[i].length;
            const value = { ...v, [collection1]: joins[i] || null };
            return value;
          });
        }),
        tap(final => {
          console.log(
            `Queried ${(final as any).length}, Joined ${totalJoins} docs`
          );
          totalJoins = 0;
        })
      );
    });
};

export const leftJoinTiendas = (
  afs: Firestore,
  field,
  collection1,
  limit = 100
) => {
  return source =>
    defer(() => {
      // Operator state
      let collData;

      // Track total num of joined doc reads
      let totalJoins = 0;

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;

          // Save the parent data state
          collData = data as any[];

          const reads$ = [];
          for (const doc of collData) {
            // Push doc read to Array

            if (doc[field]) {
              // Perform query on join key, with optional limit
              reads$.push((collectionData<TiendasModel>(
                query<TiendasModel>(
                  collection(afs, collection1) as CollectionReference<TiendasModel>,
                  where('id', '==', doc[field])
                ), { idField: 'id' }
              ))
                .pipe(
                  map(f => f[0])
                ));
            } else {
              reads$.push(of([]));
            }
          }

          return combineLatest(reads$);
        }),
        map(joins => {
          return collData.map((v, i) => {
            // totalJoins += joins[i].length;
            const value = { ...v, [collection1]: joins[i] || null };
            return value;
          });
        }),
        tap(final => {
          console.log(
            `Queried ${(final as any).length}, Joined ${totalJoins} docs`
          );
          totalJoins = 0;
        })
      );
    });
};

export const leftJoinDepartamentos = (
  afs: Firestore,
  field,
  collection,
  limit = 100
) => {
  return source =>
    defer(() => {
      // Operator state
      let collData;

      // Track total num of joined doc reads
      let totalJoins = 0;

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;

          // Save the parent data state
          collData = data as any[];

          const reads$ = [];
          for (const doc of collData) {
            // Push doc read to Array

            if (doc[field]) {
              // Perform query on join key, with optional limit
              const q = ref => ref.where('id', '==', doc[field]).limit(limit);

              reads$.push(collection(afs, collection, q).valueChanges()
                .pipe(
                  map(f => f[0])
                ));
            } else {
              reads$.push(of([]));
            }
          }

          return combineLatest(reads$);
        }),
        map(joins => {
          return collData.map((v, i) => {
            // totalJoins += joins[i].length;
            const value = { ...v, [collection]: joins[i] || null };
            return value;
          });
        }),
        tap(final => {
          console.log(
            `Queried ${(final as any).length}, Joined ${totalJoins} docs`
          );
          totalJoins = 0;
        })
      );
    });
};

export const leftJoinHorarios = (
  afs: Firestore,
  field,
  collection1,
  limit = 100
) => {
  return source =>
    defer(() => {
      // Operator state
      let collData;

      // Track total num of joined doc reads
      let totalJoins = 0;

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;

          // Save the parent data state
          collData = data as any[];

          const reads$ = [];
          for (const doc of collData) {
            // Push doc read to Array

            if (doc[field]) {
              // Perform query on join key, with optional limit
              const dw = new Date().getDay();
              // const q = ref => ref.where('tiendaId', '==', doc[field]).where('dia', '==', dw).limit(limit);

              reads$.push((collectionData<HorariosModel>(
                query<HorariosModel>(
                  collection(afs, collection1) as CollectionReference<HorariosModel>,
                  where('tiendaId', '==', doc[field])
                ), { idField: 'id' }
              ))
                .pipe(
                  map(f => f[0])
                ));
            } else {
              reads$.push(of([]));
            }
          }

          return combineLatest(reads$);
        }),
        map(joins => {
          return collData.map((v, i) => {
            // totalJoins += joins[i].length;
            const value = { ...v, [collection1]: joins[i] || null };
            return value;
          });
        }),
        tap(final => {
          console.log(
            `Queried ${(final as any).length}, Joined ${totalJoins} docs`
          );
          totalJoins = 0;
        })
      );
    });
};
