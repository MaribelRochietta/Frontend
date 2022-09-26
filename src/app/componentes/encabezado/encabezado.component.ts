import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Sobre } from 'src/app/Modelo/Sobre';
import { LoginuserService } from 'src/app/services/loginuser.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

 
  constructor(private service:LoginuserService, private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string)
  {
    return this.router.url == route
  }
}

