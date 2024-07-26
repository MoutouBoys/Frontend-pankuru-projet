import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private authService: AuthService, private router: Router) {
    const storedUser = this.isBrowser() ? localStorage.getItem('currentUser') : null;
    this.currentUserSubject = new BehaviorSubject<any>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;

  }

  getUsername(): string | null {
    let user = this.currentUserSubject.value;
    return user ? user.Nom + ' ' + user.Prenom : null;
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
    this.router.navigate(['/connexion']);
  }


  logo1: string = "assets/images/logoToolbar.png";
  logo: string = "assets/images/logo2.png";
  home: string = "assets/images/Home.png";
  vols: string = "assets/images/vol-direct 1.png";
  personnels: string = "assets/images/Personnel.png";
  aeroport: string = "assets/images/aeroport 1.png";
  passagers: string = "assets/images/passagers 1.png";
  avions: string = "assets/images/Avions.png";
  ajouter: string = "assets/images/Ajouter.png";
  parametres: string = "assets/images/Settings.png";
  faq: string = "assets/images/faq 1.png";
  selectedNavItem: string = 'accueil'; // Par défaut, l'accueil est sélectionné

  selectItem(item: string) {
    this.selectedNavItem = item;
  }
}
