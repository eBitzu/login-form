import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as fromComponents from './components';
import { homeRoute } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
  ],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class HomeModule { }
