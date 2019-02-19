import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class HomeModule { }
