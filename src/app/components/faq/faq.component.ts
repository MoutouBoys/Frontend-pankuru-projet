import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faq: string= "assets/images/faq.svg";
  faq_icon: string= "assets/images/faq 1.png";
}
