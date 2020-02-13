import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  putUser(data:{}){
    let local = JSON.parse(localStorage.getItem('token'));
    let id = local.userId;
    let token = local.id;
    this.http.put(`http://localhost:3000/api/users/${id}?access_token=${token}`,data).subscribe(
      (response)=>{
        console.log('usuario modificado: ',data);
      }
    );
  }
  constructor(private http:HttpClient,public toastController: ToastController) { }

  postUser(data:{}){
    this.http.post('http://localhost:3000/api/users',data).subscribe(
      (response)=>{console.log('okay')},(error) =>
      alert('Error, por favor asegurese de que los datos introducidos son válidos'));
  }
  obtenerUsuario(){
    let local = JSON.parse(localStorage.getItem('token'));
    let id = local.userId;
    let token = local.id;
    console.log(token);
    return this.http.get(`http://localhost:3000/api/users/${id}?access_token=${token}`)
  }
  loginUser(user){
    this.http.post('http://localhost:3000/api/users/login',user).subscribe(
      (response)=>{
        localStorage.setItem('token',JSON.stringify(response));
        console.log('Correct login');
        this.presentToast('¡Bienvenido!');
        this.guardarRol();
        this.obtenerUsuario().subscribe((data:any)=>{
          localStorage.setItem('icono',JSON.stringify(data.icono));
          window.location.reload();
          localStorage.setItem('pass', JSON.stringify(user.password));
        },(err)=>this.presentToast('Error al obtener icono'));
       
        //JSON.parse() para convertir el string almacenado en un JSON.
      },(error) => {
        console.log('error',error.error.error.message)
        this.presentToast('LogIn fallido');
      }
      ); 
  }
  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  guardarRol(){
    let local = JSON.parse(localStorage.getItem('token'));
    let id = local.userId;
    let token = local.id;
    let datos;
    this.http.get(`http://localhost:3000/api/users/${id}?access_token=${token}`).subscribe((data)=>{
       datos = data;
       localStorage.setItem('rol',JSON.stringify(datos.rol));
    });
  }
  logoutUser(alcachofa:any){
    console.log(JSON.parse(alcachofa).id);
    this.http.post(`http://localhost:3000/api/users/logout?access_token=`+JSON.parse(alcachofa).id, null).subscribe(
      (response)=>{
       
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        console.log('okay');
        window.location.reload();
    },
    (error) => {
      console.log('error');
    localStorage.removeItem('token');
    window.location.reload();
  });
  }
  /*tokenCaducado(){
    var token = localStorage.getItem('token');
    var isExpiredToken = false;
    if(token.)
  }*/
}
