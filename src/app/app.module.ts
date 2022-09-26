import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { ServiceSobreService } from 'src/app/services/service-sobre.service';
import { ServiceEstudiosService } from 'src/app/services/service-estudios.service';
import { ServiceConocimientosService } from 'src/app/services/service-conocimientos.service';
import { ServiceProyectosService } from 'src/app/services/service-proyectos.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarSobreComponent } from './componentes/editar-sobre/editar-sobre.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { EditarEstudiosComponent } from './componentes/editar-estudios/editar-estudios.component';
import { EstudiosAgregarComponent } from './componentes/estudios-agregar/estudios-agregar.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { ProyectosAgregarComponent } from './componentes/proyectos-agregar/proyectos-agregar.component';
import { ConocimientosAgregarComponent } from './componentes/conocimientos-agregar/conocimientos-agregar.component';
import { EditarConocimientosComponent } from './componentes/editar-conocimientos/editar-conocimientos.component';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { LoginuserService } from './services/loginuser.service';

const routes: Routes = 
[
  {path:'', redirectTo:'',component:AppComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch: 'full'},

  {path:'sobre', component:SobreComponent},
  {path:'editarSobre',component:EditarSobreComponent},
  {path:'modoEdicion',component:EditarSobreComponent},


  {path:'estudios', component:EstudiosComponent},
  {path:'editarEstudios',component:EditarEstudiosComponent},
  {path:'estudiosAgregar',component:EstudiosAgregarComponent},

  {path:'proyectos',component:ProyectosComponent},
  {path:'editarProyectos' ,component:EditarProyectosComponent},
  {path:'proyectosAgregar' ,component:ProyectosAgregarComponent},

  {path:'conocimientos',component:ConocimientosComponent},
  {path:'editarConocimientos' ,component:EditarConocimientosComponent},
  {path:'conocimientosAgregar' ,component:ConocimientosAgregarComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    TituloComponent,
    LoginComponent,
    EditarSobreComponent,
    SobreComponent,

    EstudiosComponent,
    EditarEstudiosComponent,
    EstudiosAgregarComponent,

    ProyectosComponent,
    EditarProyectosComponent,
    ProyectosAgregarComponent,

    ConocimientosAgregarComponent,
    EditarConocimientosComponent,
    ConocimientosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ServiceSobreService, 
    ServiceEstudiosService,
    ServiceConocimientosService,
    ServiceProyectosService,
    LoginuserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
