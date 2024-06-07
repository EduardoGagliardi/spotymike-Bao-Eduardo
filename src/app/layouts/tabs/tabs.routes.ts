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
          import('../../pages/like/like.page').then((m) => m.LikePage),
      },
      {
        path: 'playlist',
        loadComponent: () =>
          import('../../pages/tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../../pages/tab3/tab3.page').then((m) => m.Tab3Page),
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
