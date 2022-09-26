import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudios } from 'src/app/Modelo/Estudios';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceEstudiosService {

  constructor(private http: HttpClient) { }
  
  Url='https://backend-portfolio2003.herokuapp.com/estudios';

  getEstudios(){
    return this.http.get<Estudios[]>(this.Url);
  }
  
  createEstudios(estudios:Estudios){
    return this.http.post<Estudios>(this.Url+"/agregar",estudios);
  }

  getEstudiosId(id:number){
    return this.http.get<Estudios>(this.Url+"/"+id);
  }
  updateEstudios(estudios:Estudios){
    return this.http.put<Estudios>(this.Url+"/"+estudios.id,estudios);
  }

  deleteEstudios(estudios:Estudios){
    return this.http.delete<Estudios>(this.Url+"/"+estudios.id);
  }
}


