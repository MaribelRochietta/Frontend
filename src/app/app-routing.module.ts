import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarSobreComponent } from './componentes/editar-sobre/editar-sobre.component';
import { SobreComponent } from './componentes/sobre/sobre.component';

import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { EditarEstudiosComponent } from './componentes/editar-estudios/editar-estudios.component';
import { EstudiosAgregarComponent } from './componentes/estudios-agregar/estudios-agregar.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { ProyectosAgregarComponent } from './componentes/proyectos-agregar/proyectos-agregar.component';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { EditarConocimientosComponent } from './componentes/editar-conocimientos/editar-conocimientos.component';
import { ConocimientosAgregarComponent } from './componentes/conocimientos-agregar/conocimientos-agregar.component';

const routes: Routes = 
[
  {path:'', redirectTo:'',component:AppComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'editarSobre',component:EditarSobreComponent},
  {path:'sobre',component:SobreComponent},
  {path:'modoEdicion',component:SobreComponent},



  {path:'estudios',component:EstudiosComponent},
  {path:'editarEstudios' ,component:EditarEstudiosComponent},
  {path:'estudiosAgregar' ,component:EstudiosAgregarComponent},
  {path:'modoEdicion' ,component:EstudiosComponent},


  {path:'proyectos',component:ProyectosComponent},
  {path:'editarProyectos' ,component:EditarProyectosComponent},
  {path:'proyectosAgregar' ,component:ProyectosAgregarComponent},
  {path:'modoEdicion' ,component:ProyectosComponent},


  {path:'conocimientos',component:ConocimientosComponent},
  {path:'editarConocimientos' ,component:EditarConocimientosComponent},
  {path:'conocimientosAgregar' ,component:ConocimientosAgregarComponent},
  {path:'modoEdicion',component:ConocimientosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
