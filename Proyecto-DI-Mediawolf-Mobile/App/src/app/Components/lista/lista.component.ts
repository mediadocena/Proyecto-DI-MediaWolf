import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NoticiasService } from 'src/app/Service/noticias.service';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/Models/NoticiasModel';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  constructor(private noticia:NoticiasService, private router:Router) { }

  noticias:Noticia[]=[];
  p:number=1;
  rol;
  tpp = 10;

  ngOnInit() {
   
    this.noticia.getNoticias().subscribe((data)=>{
      this.noticias=data;
      console.log(this.noticias)
    },(error)=>{
      console.log('algo ha fallado')
    })
    this.role();
  }

  iranoticia(id){
    console.log(this.noticias[1]._id)
    console.log(id);
    this.noticia.saveId(id);
    this.router.navigate([`/Noticias/${id}`]);
  }
  pageChanged($event){
    console.log($event)
    this.p= $event;
  }
  role(){
    this.rol = JSON.parse(localStorage.getItem('rol'));
  }
  Eliminar(id){
    let noticiaid = this.noticias[id]._id;
    console.log(this.noticias[id].titulo);
    console.log(noticiaid);
    this.noticia.deleteNoticia(noticiaid).subscribe((response)=>{
      alert('Noticia Eliminada');
      window.location.reload();
    },(err)=>alert('error al eliminar la noticia'));
  }

  Modificar(id){
    this.router.navigate(['/ModificarNoticia/'+id]);
  }
}
