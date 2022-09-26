import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProyectosService } from 'src/app/services/service-proyectos.service';
import { Proyectos } from 'src/app/Modelo/Proyectos';


@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  proyectos:Proyectos = new Proyectos();

  constructor(private router:Router, private service:ServiceProyectosService) { }

    ngOnInit() {
      this.Editar();
    }
  
    Editar(){
      let id=localStorage.getItem("id");
      this.service.getProyectosId(+Number(id))
      .subscribe(data=>{
        this.proyectos=data;
      })
    }
  
    Actualizar(proyectos:Proyectos){
      this.service.updateProyectos(proyectos)
      .subscribe(data=>{
      this.proyectos=data;
      alert("Se actualizo con Exito");
      this.router.navigate(["/modoEdicion"]);
      })
    }
  }