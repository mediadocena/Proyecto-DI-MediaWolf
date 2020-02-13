import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ListaComponent } from './Components/lista/lista.component';
import { AjustesComponent } from './Components/ajustes/ajustes.component';
import { NoticiaComponent } from './Components/noticia/noticia.component';

const routes: Routes = [
  {path: '', redirectTo: 'lista', pathMatch: 'full' },
  {path:'inicio',component:InicioComponent},
  {path:'lista',component:ListaComponent},
  {path:'ajustes',component:AjustesComponent},
  {path:'Noticias/:id',component:NoticiaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
