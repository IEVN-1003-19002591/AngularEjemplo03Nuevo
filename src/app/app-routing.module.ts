import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu/menu.component';
import { DatosAlumnoComponent } from './formulario/datos-alumno/datos-alumno.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path : 'home', component:HomeComponent},
  {path: 'Agregar', component: DatosAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
