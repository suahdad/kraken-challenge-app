import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject,pipe, Observable } from 'rxjs';
import { User } from '../models/user';
import { map, catchError } from 'rxjs/operators';
import { UserResponse } from '../models/user-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginURL = `${environment.apiURL}/user/login`
  private registerURL = `${environment.apiURL}/user/register`

  private userSubject : BehaviorSubject<UserResponse>;

  constructor(private http: HttpClient) { 
    //assign local storage item to behavior subject
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentuser')))
  }

  //public currentUserValue to gain access what is currentuser 
  public get CurrentUserValue():UserResponse {
    let value;
    this.userSubject.asObservable().subscribe(data => value = data)
    return value;
  }

  login(model: User): Observable<any>{
    return this.http.post<any>(this.loginURL,model)
    .pipe(map((res) => {
            localStorage.setItem('currentuser',JSON.stringify(res));
            this.userSubject.next(res);
            return res;
          
    }))
    // .pipe(map((res:Response) => {
    //     if(res.status === 200){
    //       var responseBody :any = res.body;
    //       localStorage.setItem('currentuser',JSON.stringify(responseBody));
    //       console.log(responseBody)
    //       this.userSubject.next(responseBody as UserResponse);
    //     }else {
    //       return res.status
    //     }
    // }))
  }
  logout() {
    //remove currentuser cookie and emit null to all subscribers of user
    localStorage.removeItem('currentuser');
    this.userSubject.next(null);
  }

  register(model: User): Observable<any>{
    return this.http.post<any>(this.registerURL,model)
    .pipe(map((res) => {
            return res;
          
    }))
}
}
