import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProyectosService } from 'src/app/services/service-proyectos.service';
import { Proyectos } from 'src/app/Modelo/Proyectos';


@Component({
  selector: 'app-proyectos-agregar',
  templateUrl: './proyectos-agregar.component.html',
  styleUrls: ['./proyectos-agregar.component.css']
})
export class ProyectosAgregarComponent implements OnInit {
proyectos:Proyectos = new Proyectos();

  constructor(private router:Router, private service:ServiceProyectosService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createProyectos(this.proyectos)
    .subscribe(data=>{
      alert("Se agregó con exito...!!!");
      this.router.navigate(["/modoEdicion"]);
    })
  }
  }