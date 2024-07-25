import { Component } from '@angular/core';
import { TitleParametreComponent } from '../mini_components/parametre/title-parametre/title-parametre.component';
import { FormulaireParametreComponent } from '../mini_components/parametre/formulaire-parametre/formulaire-parametre.component';

@Component({
  selector: 'app-parametre',
  standalone: true,
  imports: [TitleParametreComponent, FormulaireParametreComponent],
  templateUrl: './parametre.component.html',
  styleUrl: './parametre.component.css'
})
export class ParametreComponent {

}
