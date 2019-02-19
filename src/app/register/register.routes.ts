import { Routes } from '@angular/router';
import * as fromComponents from './components';

export const loginRoute: Routes = [
  {
    path: '',
    component: fromComponents.LoginComponent,
  }
];

export const signInRoute: Routes = [
  {
    path: '',
    component: fromComponents.SigninComponent,
  }
];
