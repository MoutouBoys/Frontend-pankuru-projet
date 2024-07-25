import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Aeroport {
  id: number;
  nom: string;
  codeIATA: string;
  longitude: number;
  latitude: number;
  altitude: number;
  capacite: number;
  nbreDePistes: number;
}

@Injectable({
  providedIn: 'root'
})
export class AeroportService {
  private apiUrl = "http://localhost:8080/aeroport/afficher";

  constructor(private http:HttpClient) { }

  getAeroport(): Observable<Aeroport[]>{
    return this.http.get<Aeroport[]>(this.apiUrl);
  }
}
