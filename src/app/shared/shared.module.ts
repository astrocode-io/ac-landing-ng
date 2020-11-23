import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { AcCardComponent } from './ac-card/ac-card.component';

@NgModule(
  {
    declarations: [
      AcCardComponent,
    ],
    imports: [
      CommonModule,
      ClarityModule
    ],
    exports: [
      AcCardComponent,]
  }
)
export class SharedModule { }
