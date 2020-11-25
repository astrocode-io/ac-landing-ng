import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    LandingComponent,
    CompanyComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    SharedModule,
  ]
})
export class LandingModule { }
