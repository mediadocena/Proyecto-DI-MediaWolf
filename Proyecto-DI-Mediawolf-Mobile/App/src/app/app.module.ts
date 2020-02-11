import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './Components/inicio/inicio.component';
import { UserService } from './Service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './Components/lista/lista.component';
import { NoticiasService } from './Service/noticias.service';
import { IconouserComponent } from './Components/iconouser/iconouser.component';
import { NoticiaComponent } from './Components/noticia/noticia.component';
import { SafePipe } from './Pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaComponent,
    IconouserComponent,
    NoticiaComponent,
    SafePipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    NoticiasService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
