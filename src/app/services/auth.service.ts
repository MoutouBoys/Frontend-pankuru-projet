import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/personne/connexion` , credentials, { responseType: 'text' })
  }

  logout(): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login/logout`, { responseType: 'text' });
  }
}
