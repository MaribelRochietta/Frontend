import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceConocimientosService } from 'src/app/services/service-conocimientos.service';
import { Conocimientos } from 'src/app/Modelo/Conocimientos';



@Component({
  selector: 'app-conocimientos-agregar',
  templateUrl: './conocimientos-agregar.component.html',
  styleUrls: ['./conocimientos-agregar.component.css']
})
export class ConocimientosAgregarComponent implements OnInit {
  conocimientos:Conocimientos = new Conocimientos();

  constructor(private router:Router, private service:ServiceConocimientosService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createConocimientos(this.conocimientos)
    .subscribe(data=>{
      alert("Se agregó con exito...!!!");
      this.router.navigate(["/modoEdicion"]);
    })
  }
  }