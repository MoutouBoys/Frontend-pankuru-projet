import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-siege',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './formulaire-siege.component.html',
  styleUrl: './formulaire-siege.component.css'
})
export class FormulaireSiegeComponent {
  faq: string= "assets/images/faq.svg";
  faq_icon: string= "assets/images/faq 1.png";
}
