import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../Models/User";
import {catchError, map, Observable, throwError} from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser={};

  endpoint: String = 'http://localhost:8080';
  headers = new HttpHeaders({'Content-Type':'application/json'});

  helper = new JwtHelperService();

  constructor(private http: HttpClient, public router: Router) { }

  login(user: User) {
    console.log(user)
    return this.http
      .post<any>(`${this.endpoint}/users/login`, user)
      .subscribe(
        (res: any) => {
          console.log(res.token)
          const decodedToken = this.helper.decodeToken(res.token);
          console.log(decodedToken.roles[0].authority);
          localStorage.setItem('access_token',res.token );
          if(decodedToken.roles[0].authority=="ROLE_"){
            this.router.navigate(['']);
          }
          else if(decodedToken.roles[0].authority=="ROLE"){
            this.router.navigate(['']);
          }

        }),
      (err:any)=>{console.log(JSON.parse(err))
      }
  }

  register(user: User) {
    console.log(user)
    return this.http
      .post<any>(`${this.endpoint}/`, user)
      .subscribe(
        (res: any) => {
          this.router.navigate(['log-in']);
        }),
      (err:any)=>{console.log(JSON.parse(err))
      }
  }


  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  getToken(){
    return localStorage.getItem('access_token');
  }


  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  handelError(error: HttpErrorResponse){
    let msg='';
    if(error.error instanceof ErrorEvent){
      msg = error.message;
    }else{
      msg= `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }


}
