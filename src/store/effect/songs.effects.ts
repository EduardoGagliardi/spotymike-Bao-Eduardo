import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { FirestoreService } from 'src/app/core/services/firestore.service';
import { GET_PRE_SONGS_TYPES, setSongs } from '../action/song.action';
export const loadSongs = createEffect(
  (actions$ = inject(Actions), fireStoreService = inject(FirestoreService)) => {
    console.log('load Songs');
    return actions$.pipe(
      ofType(GET_PRE_SONGS_TYPES.GET_SONG),
      exhaustMap(() =>
        fireStoreService.getAllSongsA().pipe(
          map((songs) => setSongs({ songs: songs })),
        )
      )
    );
  },
  { functional: true }
);

