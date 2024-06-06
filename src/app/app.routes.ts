import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    // Delete
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth/auth.page').then((m) => m.AuthPage),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.page').then((m) => m.RegisterPage),
      },
    ],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./layouts/tabs/tabs.routes').then((m) => m.routes),
    canActivate: [authGuard],
    // children: [
    //   {
    //     path: 'home',
    //     loadComponent: () =>
    //       import('./pages/home/home.page').then((m) => m.HomePage),
    //   },
    //   {
    //     path: 'like',
    //     loadComponent: () =>
    //       import('./pages/tab2/tab2.page').then((m) => m.Tab2Page),
    //   },
    // ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
    //redirectTo: 'home',
  },
  {
    path: 'song-player',
    loadComponent: () => import('./pages/song-player/song-player.page').then( m => m.SongPlayerPage)
  },
];
