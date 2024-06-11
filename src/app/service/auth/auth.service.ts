import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

public API_URL  = "http://localhost:3000/"
public  httpOption = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.cookieServer.get('access_token')}`
  }
}

loggedIn :boolean = false

public isLoggedIn() {
  return !!this.cookieServer.get('access_token');
}

  register(body:any) {
    return this.http.post<any>(`${this.API_URL}users/`,body)
  }
  login (body:any) {
    return this.http.post<any>(`${this.API_URL}users/login`,body) 
  }

logout(){

 return this.cookieServer.delete('access_token');

}
isAuthenticated() {
  const promise = new Promise<boolean>((resolve, reject) => {
    let cc= this.cookieServer.get('access_token');
    if(cc) {
      this.loggedIn = true;
      resolve(this.loggedIn)
    }else {
      resolve(this.loggedIn)
    }
  }
)
return promise
}
constructor(private http:HttpClient, private cookieServer: CookieService) { }

}
