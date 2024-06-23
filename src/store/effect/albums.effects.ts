import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { FirestoreService } from 'src/app/core/services/firestore.service';
import { GET_PRE_ALBUM_TYPES, setAlbums } from '../action/album.action';
export const loadAlbums = createEffect(
  (actions$ = inject(Actions), fireStoreService = inject(FirestoreService)) => {
    console.log('load Songs');
    return actions$.pipe(
      ofType(GET_PRE_ALBUM_TYPES.GET_ALBUM),
      exhaustMap(() =>
        fireStoreService.getAllAlbums().pipe(
          map((albums) => setAlbums({ albums: albums })),
        )
      )
    );
  },
  { functional: true }
);

