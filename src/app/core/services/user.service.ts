import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  login(user:{ email:string,password:string})
  {
    return this.http.post<any>(`${environment.baseUrl}login`,user)
  }
  isLoggedIn() {
    let token = sessionStorage.getItem(environment.authtoken);
    if (token)
    {
      return true;
  }
  else { return false;}
}
}
