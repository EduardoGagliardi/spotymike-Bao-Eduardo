import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { authGuard } from 'src/app/core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'like',
        loadComponent: () =>
          import('../../pages/favoris/favoris.page').then((m) => m.FavorisPage),
      },
      {
        path: 'playlist',
        loadComponent: () =>
          import('../../pages/playlist/playlist.page').then((m) => m.PlaylistPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../../pages/user-profile/user-profile.page').then((m) => m.UserProfilePage),
      },
      {
        path: '',
        redirectTo: '/home/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/home',
    pathMatch: 'full',
  },

];
