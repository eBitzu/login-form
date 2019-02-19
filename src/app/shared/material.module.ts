import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatToolbarModule } from '@angular/material';
@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
  ]
})
export class MyMaterialModule {}
