import { Component, Input } from '@angular/core';
@Component({
  selector: 'ac-card',
  templateUrl: './ac-card.component.html',
  styleUrls: ['./ac-card.component.css']
})
export class AcCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';

  public images: string[] = [
    '../../../assets/gummy-sega-mega-drive.svg',
  ];
  constructor() { }

}
