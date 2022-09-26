
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/Modelo/Proyectos';
import { ServiceProyectosService } from 'src/app/services/service-proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectoss!:Proyectos[];

  constructor(private service:ServiceProyectosService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProyectos()
    .subscribe(data=>{
      this.proyectoss=data;
    })
  }

  Editar(proyectos:Proyectos):void{
    localStorage.setItem("id",proyectos.id.toString());
    this.router.navigate(["editarProyectos"]);
  }

  Delete(proyectos:Proyectos){
    this.service.deleteProyectos(proyectos)
    .subscribe(data=>{
      this.proyectoss=this.proyectoss.filter(p=>p!==proyectos);
      alert("Proyecto eliminado...");
    })
  }

  Nuevo(){
    this.router.navigate(['proyectosAgregar']);
  }
  
  hasRoute(route: string)
  {
    return this.router.url == route
  }
}
