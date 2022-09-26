import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maribel Rochietta';
  login= 'false';

  constructor(private router:Router) { }
  public ngOnInit(): void{}
  
  hasRoute(route: string)
  {
    return this.router.url == route
  }

  areLogin()
  {
    return this.login;
  }

 
}
