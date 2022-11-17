import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receipes } from 'src/models/receipes';

@Injectable({
  providedIn: 'root'
})
export class ReceipesService {

  enviroment_url = 'http'

  constructor(private http: HttpClient) {
  }

  getReceipesByFilters(receipe: Receipes): Observable<Receipes[]> {
    return this.http.post<Receipes[]>(`${environment.backend_url}receipes`, receipe);
  }
}
