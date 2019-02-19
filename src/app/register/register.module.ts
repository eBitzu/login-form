import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { loginRoute, signInRoute } from './register.routes';

import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [...fromServices.services],
  exports: [...fromComponents.components],
  declarations: [...fromComponents.components]
})
export class RegisterModule { }

@NgModule({
  imports: [
    RegisterModule,
    RouterModule.forChild(loginRoute)
  ],
})
export class LoginModule { }

@NgModule({
  imports: [
    RouterModule.forChild(signInRoute),
    RegisterModule
  ],
})
export class SignInModule { }
