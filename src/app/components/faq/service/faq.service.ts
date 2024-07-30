import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:8080/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  postFaq(faq: any): Observable<any> {
    return this.http.post(`${apiUrl}/ajout`, faq); 
  }

}
