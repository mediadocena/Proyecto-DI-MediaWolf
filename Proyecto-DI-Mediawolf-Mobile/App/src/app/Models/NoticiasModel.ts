import { Comentarios } from './ComentariosModel';

export class Noticia{
    categoria:string;
    titulo:string;
    subtitulo:string;
    img:string;
    cuerpo:string;
    comentarios:[Comentarios];
    _id:string;
    constructor(categoria?,titulo?,subtitulo?,img?,cuerpo?,comentarios?){
        this.categoria=categoria;
        this.titulo=titulo;
        this.subtitulo=subtitulo;
        this.img=img;
        this.cuerpo=cuerpo;
        this.comentarios=comentarios;
    }
    devolverNoticia(){
        let data ={
            categoria:this.categoria,
            titulo:this.titulo,
            subtitulo:this.subtitulo,
            img:this.img,
            cuerpo:this.cuerpo,
            comentarios:this.comentarios,
            id:this._id
        }
    return data;
    }

}