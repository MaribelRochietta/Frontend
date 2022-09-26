import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSobreService } from 'src/app/services/service-sobre.service';
import { Sobre } from 'src/app/Modelo/Sobre';


@Component({
  selector: 'app-editar-sobre',
  templateUrl: './editar-sobre.component.html',
  styleUrls: ['./editar-sobre.component.css']
})
export class EditarSobreComponent implements OnInit {
sobre:Sobre = new Sobre();


  constructor(private router:Router, private service:ServiceSobreService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getSobreId(+Number(id))
    .subscribe(data=>{
      this.sobre=data;
    })
  }

  Actualizar(sobre:Sobre){
    this.service.updateSobre(sobre)
    .subscribe(data=>{
    this.sobre=data;
    alert("Se actualizo con Exito");
    this.router.navigate(["/modoEdicion"]);
    })
  }
}