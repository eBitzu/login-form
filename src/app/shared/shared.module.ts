import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule],
  exports: [ReactiveFormsModule, NgSelectModule, ...fromComponents.components],
  providers: [...fromServices.services],
  declarations: [...fromComponents.components],
})
export class SharedModule {}
