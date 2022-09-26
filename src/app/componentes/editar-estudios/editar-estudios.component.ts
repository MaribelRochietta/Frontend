import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEstudiosService } from 'src/app/services/service-estudios.service';
import { Estudios } from 'src/app/Modelo/Estudios';


@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {
  estudios:Estudios = new Estudios();
  
  
    constructor(private router:Router, private service:ServiceEstudiosService) { }
  
    ngOnInit() {
      this.Editar();
    }
  
    Editar(){
      let id=localStorage.getItem("id");
      this.service.getEstudiosId(+Number(id))
      .subscribe(data=>{
        this.estudios=data;
      })
    }
  
    Actualizar(estudios:Estudios){
      this.service.updateEstudios(estudios)
      .subscribe(data=>{
      this.estudios=data;
      alert("Se actualizo con Exito");
      this.router.navigate(["/modoEdicion"]);
      })
    }
  }