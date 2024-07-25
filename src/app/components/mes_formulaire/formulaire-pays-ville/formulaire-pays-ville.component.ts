import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-pays-ville',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './formulaire-pays-ville.component.html',
  styleUrl: './formulaire-pays-ville.component.css'
})
export class FormulairePaysVilleComponent {
  faq: string= "assets/images/faq.svg";
  faq_icon: string= "assets/images/faq 1.png";
}
