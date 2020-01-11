'use strict';

module.exports = function(Image) {

    /*Image.beforeRemote('upload',function(ctx,next){
        let fs = require("fs");
        console.log('jor',ctx.req.name)
        fs.rename('./files/images/'+ctx.args.formData.name,'./files/images/'+ctx.args.name,function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
        next();
    });*/


   /* Image.Upload = function(img,name,cb){
        let image = img

    // luego extraes la cabecera del data url
    var base64Data = image.data.replace(/^data:image\/jpeg;base64,/, "");

    // grabas la imagen el disco
    fs.writeFile(name+'.png', base64Data, 'base64', function(err) {
        console.log(err);
    });
    cb(null,'Imagen insertada');
    }

    Image.remoteMethod('upload', {
        accepts: {arg: 'img',type:''},
        accepts:{arg:'name',type:'string'}
  });*/

    

};
