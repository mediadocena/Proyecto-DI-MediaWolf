'use strict';
var twitter = require('twitter');
module.exports = function(Noticia) {
    Noticia.PostTwitter = function(titulo,id,cb){
        var client = new twitter({
            consumer_key:'KJ0HD2R5ZVlhzKlg20kDeIkaI',
            consumer_secret:'D16rpCmSN4WM7kC2bGXrmOceeM1AmNldLYiUo4iU7Du8Ly7HId',
            access_token_key:'1230889896413401088-BuqugxBQF3cOxdudpVFu8pfXl6OTIZ',
            access_token_secret:'YicbZpFMcarM8Uf9rfagg1Eg194slZDlTZkzu88EGUEfW'
        })
        client.post('statuses/update',{status:`¡Nueva Noticia!\n${titulo}\n http://localhost:4200/Noticias/${id}`},function(err,tweet,resp){
            if(err){
                console.log(err)
            }
            console.log( 'res---->', titulo, id);
           /* console.log(tweet)
            console.log(resp)*/
        })
        cb();
    }
    Noticia.remoteMethod('PostTwitter', {
        accepts:[ {arg: 'titulo', type:'string'},
        {arg: 'id', type:'string'}],
        returns: {arg: 'resp', type: 'string'}
  });
};
