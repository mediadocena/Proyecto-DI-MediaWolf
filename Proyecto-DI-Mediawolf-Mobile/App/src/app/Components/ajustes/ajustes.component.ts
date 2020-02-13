import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

const MEDIA_FOLDER_NAME = 'my_media';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent implements OnInit {

  files = [];

  constructor(private imagePicker: ImagePicker, private router:Router, private user:UserService, private camera:Camera, private file:File, private storage: Storage) { }
  iconoUser;
  userName;
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

  fotasa() {
    this.camera.getPicture(this.options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  almacenamiento() {
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err =>
      console.log('Directory doesnt exist'));
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
}
