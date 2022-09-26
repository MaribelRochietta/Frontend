
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceConocimientosService } from 'src/app/services/service-conocimientos.service';
import { Conocimientos } from 'src/app/Modelo/Conocimientos';

@Component({
  selector: 'app-editar-conocimientos',
  templateUrl: './editar-conocimientos.component.html',
  styleUrls: ['./editar-conocimientos.component.css']
})
export class EditarConocimientosComponent implements OnInit {
  conocimientos:Conocimientos = new Conocimientos();

  constructor(private router:Router, private service:ServiceConocimientosService) { }


    ngOnInit() {
      this.Editar();
    }
  
    Editar(){
      let id=localStorage.getItem("id");
      this.service.getConocimientosId(+Number(id))
      .subscribe(data=>{
        this.conocimientos=data;
      })
    }
  
    Actualizar(conocimientos:Conocimientos){
      this.service.updateConocimientos(conocimientos)
      .subscribe(data=>{
      this.conocimientos=data;
      alert("Se actualizo con Exito");
      this.router.navigate(["/modoEdicion"]);
      })
    }
  }