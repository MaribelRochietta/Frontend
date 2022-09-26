import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/Modelo/Estudios';
import { ServiceEstudiosService } from 'src/app/services/service-estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudioss!:Estudios[];

 
  constructor(private service:ServiceEstudiosService, private router: Router) { }

  ngOnInit(): void {
    this.service.getEstudios()
    .subscribe(data=>{
      this.estudioss=data;
    })
  }

  Editar(estudios:Estudios):void{
    localStorage.setItem("id",estudios.id.toString());
    this.router.navigate(["editarEstudios"]);
  }

  Delete(estudios:Estudios){
    this.service.deleteEstudios(estudios)
    .subscribe(data=>{
      this.estudioss=this.estudioss.filter(p=>p!==estudios);
      alert("Estudio eliminado...");
    })
  }

  Nuevo(){
    this.router.navigate(['estudiosAgregar']);
  }
  
  hasRoute(route: string)
  {
    return this.router.url == route
  }
}
