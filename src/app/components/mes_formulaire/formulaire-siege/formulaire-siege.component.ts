import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';

@Component({
  selector: 'app-formulaire-siege',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent],
  templateUrl: './formulaire-siege.component.html',
  styleUrl: './formulaire-siege.component.css'
})
export class FormulaireSiegeComponent {
  faq: string= "assets/images/faq.svg";
  faq_icon: string= "assets/images/faq 1.png";
}
