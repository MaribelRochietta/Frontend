import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Modelo/User';


@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl='https://backend-portfolio2003.herokuapp.com/login';

loginUser(user: User):Observable<object>{
  console.log(user);
  return this.httpClient.post(this.baseUrl, user);
}
}
