import { Injectable } from '@angular/core';
import { Humanvital } from '../models/humanvital';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VitalService {

  constructor(private http: HttpClient) {   }
  
  getVitals(): Observable<Humanvital> {
      return this.http.get<Humanvital>("./assets/response.json")
  }
}
