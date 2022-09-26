import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Sobre } from 'src/app/Modelo/Sobre';
import { ServiceSobreService } from 'src/app/services/service-sobre.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})

export class SobreComponent implements OnInit{
sobres!:Sobre[];


  
  constructor(private service:ServiceSobreService, private router: Router) { }

  ngOnInit(): void {
    this.service.getSobre()
    .subscribe(data=>{
      this.sobres=data;
    })
  }

  Editar(sobre:Sobre):void{
    localStorage.setItem("id",sobre.id.toString());
    this.router.navigate(["editarSobre"]);
  }
 
  hasRoute(route: string)
  {
    return this.router.url == route
  }
}
