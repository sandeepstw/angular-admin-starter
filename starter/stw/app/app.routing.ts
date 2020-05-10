import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './core';
import { AuthLayoutComponent } from './core';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './views/dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'docs',
      loadChildren: './views/docs/docs.module#DocsModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './views/auth/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
      loadChildren: './views/error/error.module#ErrorModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];
