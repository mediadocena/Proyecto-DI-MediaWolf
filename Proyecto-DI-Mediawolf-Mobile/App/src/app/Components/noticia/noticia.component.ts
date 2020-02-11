import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/Service/noticias.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { Noticia } from 'src/app/Models/NoticiasModel';
import { Comentarios } from 'src/app/Models/ComentariosModel';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  constructor(private noticiaService:NoticiasService,
    private router:ActivatedRoute,
    private user:UserService) {
      if(JSON.parse(localStorage.getItem('token'))!=null){
      this.idu = JSON.parse(localStorage.getItem('token')).userId;
      }
    }
  id;
  auth:boolean;
  p:number=1;
  idu="";
  isButtonVisible:boolean = false;
  noticia:Noticia; 
  total;
  comentarios:[Comentarios];
  comentarioW;
   ngOnInit() {
    this.router.params.subscribe(event => {
      this.id = event.id;
     });
    this.Obtener();
    this.isAuth();
   console.log(this.idu);
  }
  Obtener(){
    this.noticiaService.getNoticiaPorId(this.id).subscribe((data:Noticia)=>{
    this.noticia = data;
    this.comentarios = this.noticia.comentarios;
    this.total = this.comentarios.length;
      console.log('AAAAAAAAAAAAAAAAAAA',this.noticia)
      console.log(this.comentarios)
      console.log(data)
    },(error)=>{
      console.log('Error al obtener la noticia');
    });
  }
  isAuth(){
    console.log(this.idu)
    if(this.idu!=""){
      this.auth=true;
    }else{
      this.auth=false;
    }
  }
  Publicar(){
    if(this.comentarioW==""||this.comentarioW== undefined||this.comentarioW==null){
      alert('No es posible introducir comentarios vacios');
    }else{
    let icono,nick,datos;
    let dummy;
    let comen:Comentarios= new Comentarios();
    this.user.obtenerUsuario().subscribe((data)=>{
      datos = data;
      icono = datos.icono;
      console.log(icono)
      nick = datos.username;
      comen.nick = nick;
      comen.icono = icono;
      comen.id= datos.id;
      comen.cuerpo = this.comentarioW;
      
      dummy={
        _id:this.id,
        categoria:this.noticia.categoria,
        titulo:this.noticia.titulo,
        subtitulo:this.noticia.subtitulo,
        img:this.noticia.img,
        cuerpo:this.noticia.cuerpo,
        comentarios:this.comentarios
      }
      console.log(dummy)
      this.comentarioW="";
      this.noticiaService.updateNoticia(dummy).subscribe((response)=>{
      },(error)=>{
        console.log(`error al actualizar noticia`),
        console.log(dummy)
      });
    },(error)=>{
      console.log('No se ha podido recuperar el usuario');
    });
  }
  }
  Eliminar(id){
    this.noticia.comentarios.splice(id,1);
    this.noticiaService.updateNoticia(this.noticia).subscribe((response)=>{
    },(error)=>{
      console.log(`error al actualizar noticia`),
      console.log(this.noticia);
    });
  }

}
