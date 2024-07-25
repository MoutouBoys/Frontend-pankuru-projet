import { Component } from '@angular/core';
import { SiegeListComponent } from '../mini_components/siege/siege-list/siege-list.component';
import { SiegeConteneurComponent } from '../mini_components/siege/siege-conteneur/siege-conteneur.component';
import { TitleSiegeComponent } from '../mini_components/siege/title-siege/title-siege.component';

@Component({
  selector: 'app-siege',
  standalone: true,
  imports: [SiegeListComponent,SiegeConteneurComponent,TitleSiegeComponent],
  templateUrl: './siege.component.html',
  styleUrl: './siege.component.css'
})
export class SiegeComponent {

}
