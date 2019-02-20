import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesNames } from '../../models/routes';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class LoginGuard implements CanActivate {
  private registerRoutes = [`/${RoutesNames.login}`, `/${RoutesNames.signup}`];
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateLogin(state);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateLogin(state);
  }

  constructor(private storageServ: StorageService, private router: Router) {}

  private validateLogin(state: RouterStateSnapshot) {
    const isRegisterRoute = this.registerRoutes.includes(state.url);
    const isUserLogin = this.storageServ.isUserLoggedIn();
    if (!isRegisterRoute && !isUserLogin) {
      this.router.navigate([RoutesNames.login]);
      return false;
    } else if (isRegisterRoute && isUserLogin) {
      this.router.navigate([RoutesNames.home]);
      return false;
    }
    return true;
  }
}
