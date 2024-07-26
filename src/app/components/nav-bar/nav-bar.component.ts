import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  logo1: string = "assets/images/logoToolbar.png";
  selectedNavItem: string = 'accueil'; // Par défaut, l'accueil est sélectionné

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      const savedNavItem = localStorage.getItem('selectedNavItem');
      if (savedNavItem) {
        this.selectedNavItem = savedNavItem;
      }
    }
  }

  selectItem(item: string) {
    this.selectedNavItem = item;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('selectedNavItem', item);
    }
  }
}
