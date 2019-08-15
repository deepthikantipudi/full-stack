import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AuthUrl = 'http://localhost:8080/api/login';
  errorMsg:any;


  constructor(
    private http: HttpClient,
    private router: Router
  ) {


  }

  getHeaders(): { headers: HttpHeaders } {
    const httpOptions = {
      headers: new HttpHeaders(
        {

          'content-type': 'application/json'
        }

      )

    };
    return httpOptions;
  }

  public login(username: string, password: string) {
    // const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<User>(this.AuthUrl, JSON.stringify({ username: username, password: password }), this.getHeaders())
    .pipe (
      tap (
        (user:User)=>{
      if (user){
        localStorage.setItem('accessToken', user.token);
      } else{
        console.log(`login failed for username=${username} and password =${password}`);
      }
    })
    );
  }
  logout(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['sign-in']);
  }

}
