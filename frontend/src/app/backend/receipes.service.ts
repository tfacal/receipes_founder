import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receipes } from 'src/app/models/receipes';

@Injectable({
  providedIn: 'root'
})
export class ReceipesService {

  constructor(private http: HttpClient) {
  }

  getReceipesByFilters(receipe: Receipes): Observable<any> {
    let url = 'http://localhost:8080/receipes_founder/receipes';
    return this.http.post<Receipes>(url, receipe);
  }
}
