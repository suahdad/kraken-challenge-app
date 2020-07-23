import { Injectable } from '@angular/core';
import { Humanvital } from '../models/humanvital';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { VitalRequest } from '../models/vital-request';


@Injectable({
  providedIn: 'root'
})
export class VitalService {

  private vitalURL = `${environment.apiURL}/humanvital`
  private getVitalsURL = `${this.vitalURL}/${environment.organizationid}` 
  constructor(private http: HttpClient) {   }
  
  getVitals(): any {
      return this.http.get<Humanvital>(this.getVitalsURL)
      .pipe(map(res => {
        return res
      }))
  }

  postVitals(vitalinfo: VitalRequest): any {
    return this.http.post<any>(this.vitalURL,vitalinfo)
    .pipe(map(res => {
      return res
    }))
  }
}
