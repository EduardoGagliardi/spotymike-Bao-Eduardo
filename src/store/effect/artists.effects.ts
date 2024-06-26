import { inject } from '@angular/core';
import { exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { FirestoreService } from 'src/app/core/services/firestore.service';
import { GET_PRE_ARTIST_TYPES, setArtists } from '../action/artist.action';
export const loadArtist = createEffect(
  (actions$ = inject(Actions), fireStoreService = inject(FirestoreService)) => {
    return actions$.pipe(
      ofType(GET_PRE_ARTIST_TYPES.GET_ARTIST),
      exhaustMap(() =>
        fireStoreService.getArtistsObservable().pipe(
          map((artists) => setArtists({ artists: artists })),
        )
      )
    );
  },
  { functional: true }
);

