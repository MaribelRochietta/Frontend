import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEstudiosService } from 'src/app/services/service-estudios.service';
import { Estudios } from 'src/app/Modelo/Estudios';


@Component({
  selector: 'app-estudios-agregar',
  templateUrl: './estudios-agregar.component.html',
  styleUrls: ['./estudios-agregar.component.css']
})
export class EstudiosAgregarComponent implements OnInit {

  estudios:Estudios = new Estudios();

  constructor(private router:Router, private service:ServiceEstudiosService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createEstudios(this.estudios)
    .subscribe(data=>{
      alert("Se agregó con exito...!!!");
      this.router.navigate(["/modoEdicion"]);
    })
  }
  }

  