import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ListaComponent } from './Components/lista/lista.component';
import { AjustesComponent } from './Components/ajustes/ajustes.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path:'inicio',component:InicioComponent},
  {path:'lista',component:ListaComponent},
  {path:'ajustes',component:AjustesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
