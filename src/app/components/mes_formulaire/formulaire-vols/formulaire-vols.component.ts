import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';

@Component({
  selector: 'app-formulaire-vols',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent],
  templateUrl: './formulaire-vols.component.html',
  styleUrl: './formulaire-vols.component.css'
})
export class FormulaireVolsComponent {
}
