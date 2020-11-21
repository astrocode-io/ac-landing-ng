import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
  ]
})
export class LandingModule { }
