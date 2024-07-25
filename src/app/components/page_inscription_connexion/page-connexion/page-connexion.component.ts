import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-connexion',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, PageConnexionComponent],
  templateUrl: './page-connexion.component.html',
  styleUrl: './page-connexion.component.css'
})
export class PageConnexionComponent{
  logo1: string = "assets/images/logoToolbar.png";

  constructor(private router: Router) { }

  onSubmit() {
    // Effectuer ici la logique de connexion, par exemple:
    // this.authService.login();
    
    // Ensuite, redirigez vers la page principale
    this.router.navigate(['/principalePage']);
  }
}
