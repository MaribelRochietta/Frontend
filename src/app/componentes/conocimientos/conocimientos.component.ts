
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Conocimientos } from 'src/app/Modelo/Conocimientos';
import { ServiceConocimientosService } from 'src/app/services/service-conocimientos.service';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  conocimientoss!:Conocimientos[];

   constructor(private service:ServiceConocimientosService, private router: Router) { }
 

  ngOnInit(): void {
    this.service.getConocimientos()
    .subscribe(data=>{
      this.conocimientoss=data;
    })
  }

  Editar(conocimientos:Conocimientos):void{
    localStorage.setItem("id",conocimientos.id.toString());
    this.router.navigate(["editarConocimientos"]);
  }

  Delete(conocimientos:Conocimientos){
    this.service.deleteConocimientos(conocimientos)
    .subscribe(data=>{
      this.conocimientoss=this.conocimientoss.filter(p=>p!==conocimientos);
      alert("Conocimiento eliminado...");
    })
  }

  Nuevo(){
    this.router.navigate(['conocimientosAgregar']);
  }

  hasRoute(route: string)
  {
    return this.router.url == route
  }
}
