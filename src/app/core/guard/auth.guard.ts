import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const localStore = inject(LocalStorageService);
  const token = await localStore.getElement('token').getValue();
  return token !=  new Array() ? true : false;
};