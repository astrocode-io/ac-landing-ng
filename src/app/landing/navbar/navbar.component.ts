import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'landing-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor() {}

  public toTop() {
    document.getElementById('products').scrollIntoView();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.getElementById('home');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}
