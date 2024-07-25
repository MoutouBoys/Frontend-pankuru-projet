import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';

@Component({
  selector: 'app-formulaire-admin',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent],
  templateUrl: './formulaire-admin.component.html',
  styleUrl: './formulaire-admin.component.css'
})
export class FormulaireAdminComponent {
 
}