import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sobre } from '../Modelo/Sobre';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceSobreService {

  constructor(private http: HttpClient) { }

  Url='https://backend-portfolio2003.herokuapp.com/sobre';

  getSobre(){
    return this.http.get<Sobre[]>(this.Url);
  }

  getSobreId(id:number){
    return this.http.get<Sobre>(this.Url+"/"+id);
  }
  updateSobre(sobre:Sobre){
    return this.http.put<Sobre>(this.Url+"/"+sobre.id,sobre);
  }

}