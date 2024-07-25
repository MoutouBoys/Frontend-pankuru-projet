import { Component } from '@angular/core';
import { TitleVolsComponent } from '../mini_components/vols/title-vols/title-vols.component';
import { ReservationsVolsComponent } from '../mini_components/vols/reservations-vols/reservations-vols.component';
import { ListeVolsComponent } from '../mini_components/vols/liste-vols/liste-vols.component';

@Component({
  selector: 'app-vol',
  standalone: true,
  imports: [TitleVolsComponent, ReservationsVolsComponent, ListeVolsComponent],
  templateUrl: './vol.component.html',
  styleUrl: './vol.component.css'
})
export class VolComponent {
}
