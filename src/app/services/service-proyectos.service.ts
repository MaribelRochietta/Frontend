import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from 'src/app/Modelo/Proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProyectosService {

  constructor(private http: HttpClient) { }
  
  Url='https://backend-portfolio2003.herokuapp.com/proyectos';

  getProyectos(){
    return this.http.get<Proyectos[]>(this.Url);
  }
  
  createProyectos(proyectos:Proyectos){
    return this.http.post<Proyectos>(this.Url+"/agregar",proyectos);
  }

  getProyectosId(id:number){
    return this.http.get<Proyectos>(this.Url+"/"+id);
  }
  updateProyectos(proyectos:Proyectos){
    return this.http.put<Proyectos>(this.Url+"/"+proyectos.id,proyectos);
  }

  deleteProyectos(proyectos:Proyectos){
    return this.http.delete<Proyectos>(this.Url+"/"+proyectos.id);
  }
}


