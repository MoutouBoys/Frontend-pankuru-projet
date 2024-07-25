import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';

@Component({
  selector: 'app-formulaire-passager',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent],
  templateUrl: './formulaire-passager.component.html',
  styleUrl: './formulaire-passager.component.css'
})
export class FormulairePassagerComponent {
}
