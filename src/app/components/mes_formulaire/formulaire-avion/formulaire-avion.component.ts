import { NgOptimizedImage } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';

@Component({
  selector: 'app-formulaire-avion',
  standalone: true,
  imports: [NgOptimizedImage,NavBarComponent, RechercheComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './formulaire-avion.component.html',
  styleUrl: './formulaire-avion.component.css'
})
export class FormulaireAvionComponent {
}
