import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'issuance',
        loadComponent: () =>
          import('./documents-issuance/documents-issuance.component').then(
            (m) => m.DocumentsIssuanceComponent
          ),
      },
      {
        path: 'documents',
        loadComponent: () =>
          import('./documents-view/documents-view.component').then(
            (m) => m.DocumentsViewComponent
          ),
      },
      {
        path: 'success',
        loadComponent: () =>
          import(
            './documents-issuance-success/documents-issuance-success.component'
          ).then((m) => m.DocumentsIssuanceSuccessComponent),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./documents-home/documents-home.component').then(
            (m) => m.DocumentsHomeComponent
          ),
      },
    ],
  },
];
