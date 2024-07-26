import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-connexion',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, PageConnexionComponent, FormsModule],
  templateUrl: './page-connexion.component.html',
  styleUrl: './page-connexion.component.css'
})
export class PageConnexionComponent implements OnInit{
  logo1: string = "assets/images/logoToolbar.png";
  person: string ="assets/images/person.png";
  eyes: string ="assets/images/eye.png";
  username: String = '';
  password: String = '';
  isConnected: boolean = false;


  constructor(private router: Router, private authService: AuthService,) { }

  
  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
        localStorage.setItem("currentUser", JSON.stringify(response));
        this.router.navigate(['/accueil']);
        this.username = '';
        this.password = '' ;

    }, error => {

      this.message = 'Invalid username or password';
      this.username = '';
      this.password = '' ;
    });
  }

  onSubmit() {
    // Effectuer ici la logique de connexion, par exemple:
    // this.authService.login();
    
    // Ensuite, redirigez vers la page principale
    this.router.navigate(['/principalePage']);
  }

      
  ngOnInit(): void {
    this.isConnected = !localStorage.getItem('currentUser');
  }

  message = '';




  

}
