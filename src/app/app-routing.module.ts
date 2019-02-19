import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailedComponent } from './shared/components';
import { RoutesNames } from './shared/models/routes';
import { LoginGuard } from './shared/services/guards/login.guard';
export const appRoutes: Routes = [
  {
    path: RoutesNames.home,
    loadChildren: './home/home.module#HomeModule',
    canActivateChild: [LoginGuard],
  },
  {
    path: RoutesNames.login,
    loadChildren: './register/register.module#LoginModule',
    canActivateChild: [LoginGuard],
  },
  {
    path: RoutesNames.signin,
    loadChildren: './register/register.module#SignInModule',
    canActivateChild: [LoginGuard],
  },
  {
    path: RoutesNames.failed,
    component: FailedComponent,
  },
  { path: '', redirectTo: RoutesNames.home, pathMatch: 'full' },
  { path: '**', redirectTo: RoutesNames.home },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
