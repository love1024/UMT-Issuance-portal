import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerificationComponent } from './verification/verification.component';
import { VerificationResultComponent } from './verification-result/verification-result.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
  },
  {
    path: 'verification',
    component: VerificationComponent,
  },
  {
    path: 'verification-result',
    component: VerificationResultComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
