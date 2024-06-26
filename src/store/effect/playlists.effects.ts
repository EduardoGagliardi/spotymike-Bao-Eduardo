import { inject } from '@angular/core';
import { exhaustMap, map } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { FirestoreService } from 'src/app/core/services/firestore.service';
import { GET_PRE_PLAYLIST_TYPES, setPlaylists } from '../action/playlist.action';
export const loadPlaylist = createEffect(
  (actions$ = inject(Actions), fireStoreService = inject(FirestoreService)) => {
    return actions$.pipe(
      ofType(GET_PRE_PLAYLIST_TYPES.GET_PLAYLIST),
      exhaustMap(() =>
        fireStoreService.getPlaylistsObservable().pipe(
          map((playlists) => setPlaylists({ playlists: playlists })),
        )
      )
    );
  },
  { functional: true }
);

