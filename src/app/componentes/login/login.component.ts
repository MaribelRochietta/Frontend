import { Component, OnInit, Input } from '@angular/core';
import { LoginuserService } from 'src/app/services/loginuser.service';
import { User } from 'src/app/Modelo/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user:User = new User();
  constructor(private loginuserservice: LoginuserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      window.location.href="/modoEdicion"
    },error=>alert("Por favor ingrese un usuario y contraseña correcto"));
  }
}
