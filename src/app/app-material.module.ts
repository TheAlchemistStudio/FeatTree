import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatExpansionModule, 
  MatDialogModule 
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class AppMaterialModule { }
