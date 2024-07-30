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
  capaciteParking: number;
  nombreDePistes: number;
  ville: Ville;
}

export interface Ville {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AeroportService {
  private apiUrl = "http://localhost:8080/aeroport/afficher";
  private apiUrlVille = "http://localhost:8080/ville/afficher";
  private apiPostAeroport = "http://localhost:8080/aeroport/ajout";

  constructor(private http:HttpClient) { }

  //fonction pour prendre la liste des aerports dans la BD
  getAeroport(): Observable<Aeroport[]>{
    return this.http.get<Aeroport[]>(this.apiUrl);
  }

  //fonction pour prendre la liste des villes dans la BD
  getVille(): Observable<Ville[]>{
    return this.http.get<Ville[]>(this.apiUrlVille);
      }
  // Fonction pour enregistrer un aéroport dans la base de données
  postAeroport(aeroportData: Aeroport): Observable<Aeroport> {
    return this.http.post<Aeroport>(this.apiPostAeroport, aeroportData);
  }
}
