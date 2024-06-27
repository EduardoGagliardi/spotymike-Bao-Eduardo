import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IToken } from '../interfaces/user';
import { Store } from "@ngrx/store";
import { AppState } from 'src/store/app.state';
import { loadUsers } from 'src/store/action/user.action';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const token = localStorage.getItem('user');
  if (!token) {
    return inject(Router).navigate(['/auth/login']);
  }else{
    store.dispatch(loadUsers())
  }
  return !!token;
};
