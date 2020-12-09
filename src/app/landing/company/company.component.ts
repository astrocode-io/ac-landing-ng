import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'landing-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  constructor() { }
  options: AnimationOptions = {
    path: '../../../assets/animations/drawkit-grape-animation-4-LOOP.json',
  };
}
