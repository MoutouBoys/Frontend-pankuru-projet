import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vol } from './model-vol';

@Injectable({
  providedIn: 'root'
})
export class ListeVolsService {

  private apiUrl = "http://localhost:8080/vol/liste"

  constructor(private http: HttpClient) { }

  getVols():Observable<Array<vol>>{
    return this.http.get<Array<vol>>(this.apiUrl)
  }


}
