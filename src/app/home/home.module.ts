import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeRoute } from './home.routes';

import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoute)],
  providers: [...fromServices.services],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
})
export class HomeModule {}
