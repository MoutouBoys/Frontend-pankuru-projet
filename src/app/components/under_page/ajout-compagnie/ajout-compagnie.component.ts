import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout-compagnie',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './ajout-compagnie.component.html',
  styleUrl: './ajout-compagnie.component.css'
})
export class AjoutCompagnieComponent {
  faq: string= "assets/images/faq.svg";
  faq_icon: string= "assets/images/faq 1.png";
  mask: string= "assets/images/Mask.png";
  maison: string= "assets/images/maison.png";
}
