'use strict';

module.exports = function(Image) {
   const fs = require('fs');
    Image.FileUpload = function(file,name, cb){
        
        fs.writeFile('./files/images/'+name,file,'base64',function (err) {});
        cb(null,'ALGO'+file);
    }

    Image.remoteMethod('FileUpload', {
        accepts:[ {arg: 'file', type: 'string'},
                {arg: 'name', type:'string'}],
        returns: {arg: 'resp', type: 'string'}
  });
};
