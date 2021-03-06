import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { ImagenesService } from 'src/app/Service/imagenes.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ToastController } from '@ionic/angular';
import { URL_API } from 'src/app/cons/constantes';
import { WebView } from '@ionic-native/ionic-webview/ngx';


const MEDIA_FOLDER_NAME = 'my_media';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent implements OnInit {

  files = [];

  constructor(private webView:WebView,private base64:Base64, private router:Router, private user:UserService, private camera:Camera, private file:File, private storage: Storage, private imageService:ImagenesService) { }
  iconoUser;
  userName;
  ext: any;
  img: string;
  nombreIcono:string;
  userid;
  userObj;
  image:string;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  ngOnInit() {
    this.iconoUser= JSON.parse(localStorage.getItem('icono'));
    console.log(this.iconoUser);
    this.user.obtenerUsuario().subscribe((res:any)=>{this.userName = res.username});
  }

  async fotasa() {
    const tempImage = this.camera.getPicture(this.options).then((imageData:string) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.img = imageData;
     this.cambiarImagen();
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.almacenamiento();
    }, (err) => {
     // Handle error
    });
  }

  almacenamiento() {
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err =>
      console.log('Directory doesnt exist'));
      alert("Funciona")
  }

  almacenamientoV2() {
     // set a key/value
    this.storage.set('name', 'Max');

    // Or to get a key/value pair
    this.storage.get('age').then((val) => {
    console.log('Your age is', val);
  });
  }

  loadFiles() {
    //this.file.dataDirectory //MEDIA_FOLDER_NAME
    //this.file.applicationStorageDirectory
    this.file.listDir('file:///storage/emulated/0/',MEDIA_FOLDER_NAME).then(
      res => {
        this.files = res;
      },
      err => console.log('error loading files: ', err)
    );
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.img= btoa(binaryString);
           console.log(btoa(binaryString));
   }

   cambiarImagen(){
    this.user.obtenerUsuario().subscribe((resp:any)=>{
      this.nombreIcono = resp.id;
      this.userObj = {
        "username":resp.username,
        "password": JSON.parse(localStorage.getItem('pass')),
        "realm":resp.realm,
        "icono": "",
        "email":resp.email,
        "rol":resp.rol
      };
      this.subirImagen();
      this.userObj.icono = URL_API+`images/images/download/${this.nombreIcono}`;
      this.user.putUser(this.userObj);
      alert(this.userObj+'\n'+this.img);
    });
    

  }

   subirImagen(){
     this.nombreIcono = this.nombreIcono+'.jpg';
     this.base64.encodeFile(this.img).then((base64File: string) => {
       this.img = base64File;
       alert(this.img);
     })
     this.imageService.uploadImage(this.img, this.nombreIcono).subscribe(
       (res) => {
         alert('Se ha actualizado el icono correctamente');
       },
       (err) => {
         alert('Ha ocurrido un error en la subida de la imagen:'+err.err);
       })
 }

 takePicture() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA
  };
  this.camera.getPicture(options)
  .then((imageData) => {
    this.image = this.webView.convertFileSrc(imageData);
  }, (err) => {
    console.log(err);
  });
}

}
