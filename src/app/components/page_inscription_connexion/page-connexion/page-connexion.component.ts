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
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './page-connexion.component.html',
  styleUrl: './page-connexion.component.css'
})
export class PageConnexionComponent implements OnInit{

 /* credentials =
    { };*/
      username: String = '';
      password: String = '';
      isConnected: boolean = false;

  ngOnInit(): void {
    this.isConnected = !localStorage.getItem('currentUser');
  }

  message = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

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


  logo1: string = "assets/images/logoToolbar.png";
  person: string ="assets/images/person.png";
  eyes: string ="assets/images/eye.png";

}
