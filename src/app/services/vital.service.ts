import { Injectable } from '@angular/core';
import { Humanvital } from '../models/humanvital';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { VitalRequest } from '../models/vital-request';
import { Vital } from '../models/vital';


@Injectable({
  providedIn: 'root'
})
export class VitalService {

  private vitalURL = `${environment.apiURL}/humanvital`
  private getVitalsURL = `${this.vitalURL}/${environment.organizationid}` 


  private vitals: Humanvital;
  public peekVitalData: Vital;
  public vitalSubject : BehaviorSubject<Humanvital>;
  

  constructor(private http: HttpClient) { 
    this.vitalSubject = new BehaviorSubject<Humanvital>(this.vitals);
    }
  

  getVitals(): Observable<Humanvital>{
      return this.http.get<Humanvital>(this.getVitalsURL)
      .pipe(map(res => {
        // this.vitals = res;
        // this.vitalSubject.next(res)

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
