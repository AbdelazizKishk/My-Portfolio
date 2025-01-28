import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('navbarNav', { static: false }) navbarNav!: ElementRef;

  closeNavbar() {
    const navbarElement = this.navbarNav.nativeElement;
    if (navbarElement.classList.contains('show')) {
      navbarElement.classList.remove('show');
    }
  }
}
