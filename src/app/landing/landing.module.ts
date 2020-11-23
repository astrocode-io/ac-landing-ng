import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    SharedModule,
  ]
})
export class LandingModule { }
