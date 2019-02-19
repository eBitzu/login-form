import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MyMaterialModule } from './material.module';

import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MyMaterialModule,
  ],
  exports: [
    ReactiveFormsModule,
    MyMaterialModule,
    ...fromComponents.components,
  ],
  providers: [...fromServices.services],
  declarations: [...fromComponents.components],
})
export class SharedModule { }
