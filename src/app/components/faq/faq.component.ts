import { Component, OnInit } from '@angular/core';
import { FaqService } from './service/faq.service';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RechercheComponent } from '../recherche/recherche.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, RechercheComponent, ReactiveFormsModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faq_icon: string = "assets/images/faq 1.png";
  faq: string = "assets/images/faq.svg";

  faqForm!: FormGroup;
  messageService: any;

  constructor(private faqService: FaqService, private fb: FormBuilder){}

  postFaq(volData: any){
    if (this.faqForm.valid) {
      this.faqService.postFaq(volData).subscribe({
        next: (response) => {
          console.log('Vol ajouté avec succès!', response);
          this.faqForm.reset();
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Vol ajouté avec succès!'
          });
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du vol', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Erreur lors de l\'ajout du vol'
          });
        },
        complete: () => {
          console.log('Vol ajouté avec succès, observable terminé');
        }
      });
    } else {
      console.error('Formulaire invalide');
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Formulaire invalide'
      });
    }
  }

}
