import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { GetStartedComponent } from './get-started/get-started.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    LandingComponent,
    CompanyComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    ContactComponent,
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    SharedModule,
    LottieModule.forRoot({ player: playerFactory })

  ]
})
export class LandingModule { }
