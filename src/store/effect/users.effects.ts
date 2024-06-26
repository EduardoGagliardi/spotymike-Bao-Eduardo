import { inject } from '@angular/core';
import { exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { FirestoreService } from 'src/app/core/services/firestore.service';
import { GET_PRE_USER_TYPES, setUsers } from '../action/user.action';
export const loadUsers = createEffect(
  (actions$ = inject(Actions), fireStoreService = inject(FirestoreService)) => {
    return actions$.pipe(
      ofType(GET_PRE_USER_TYPES.GET_USER),
      exhaustMap(() =>
        fireStoreService.getUsers().pipe(
          map((users) => setUsers({ users: users })),
        )
      )
    );
  },
  { functional: true }
);

