'use strict';
var config = require('../../server/config.json');
var path = require('path');
const MongoClient = require('mongodb').MongoClient;

const test = require('assert');

// Connection url

const url = 'mongodb+srv://Alejandro:Prueba1@proyectodi-sn0fh.mongodb.net/test?retryWrites=true&w=majority';
module.exports = function(User) {

  User.CambiarIcono = function(Icono,Id, cb){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("test");
      var myquery = { _id: `ObjectId("${Id}")` };
      var newvalues = { $set: {icono: Icono} };
      dbo.collection("user").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });
    cb(null,'Icono Actualizado')
  }
  User.remoteMethod('CambiarIcono', {
    accepts:[ {arg: 'Icono', type:'string'},
    {arg: 'Id', type:'string'}],
    returns: {arg: 'resp', type: 'string'}
  });
};
