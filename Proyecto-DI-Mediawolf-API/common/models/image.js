'use strict';

module.exports = function(Image) {

   const fs = require('fs');
    Image.FileUpload = function(file,name, cb){
            console.log('fichero',file)
            console.log('nombre',name)
        fs.writeFile('./files/images/'+name,file,'base64',function (err) {});
        cb(null,'ALGO'+name);
    }

    Image.remoteMethod('FileUpload', {
        accepts:[ {arg: 'file', type:'any'},
        {arg: 'name', type:'string'}],
        returns: {arg: 'resp', type: 'string'}
  });
};
