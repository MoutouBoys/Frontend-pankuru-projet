import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulaire-aeroport',
  standalone: true,
  imports: [],
  templateUrl: './formulaire-aeroport.component.html',
  styleUrl: './formulaire-aeroport.component.css'
})
export class FormulaireAeroportComponent implements OnInit{
  aeroportForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.aeroportForm = this.fb.group({
      nomAeroport: ['', Validators.required],
      nomVille: ['', Validators.required],
      // ... autres champs
    });
  }
}
