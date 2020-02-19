import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
/*import { Camera } from '@ionic-native/camera/ngx';*/
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './Components/inicio/inicio.component';
import { UserService } from './Service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './Components/lista/lista.component';
import { NoticiasService } from './Service/noticias.service';
import { IconouserComponent } from './Components/iconouser/iconouser.component';
import { AjustesComponent } from './Components/ajustes/ajustes.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { NoticiaComponent } from './Components/noticia/noticia.component';
import { SafePipe } from './Pipes/safe.pipe';
import { IonicStorageModule } from '@ionic/storage';
import { ImagenesService } from './Service/imagenes.service';
import { Base64 } from '@ionic-native/base64/ngx';


@NgModule({
  declarations: [AppComponent,InicioComponent,ListaComponent,IconouserComponent, UsuarioComponent, AjustesComponent, SafePipe, NoticiaComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,
     IonicModule.forRoot(),
     IonicStorageModule.forRoot()
    ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    NoticiasService,
    ImagenesService,
    Camera,
    File,
    Base64,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
