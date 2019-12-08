from flask import Flask,request,jsonify
from flask_restful import Resource,Api
from flask_pymongo import PyMongo
import json
app = Flask(__name__)
app.config['MONGO_DBNAME']='test'
app.config['MONGO_URI']='mongodb+srv://Alejandro:Prueba1@proyectodi-sn0fh.mongodb.net/test?retryWrites=true&w=majority'
mongo=PyMongo(app)
api = Api(app)

class Users(Resource):
    def get(self):
        usr = mongo.db.user
        output=[]
        for s in usr.find():
            output.append({'username':s['username'],'email':s['email'],'emailVerified':s['emailVerified']})
        return jsonify({'result':output})
    def post(self):
        usr=mongo.db.user
        name= request.json['username']
        email=request.json['email']
        realm=request.json['realm']
        password=request.json['password']
        usr.insert_one({'realm':realm,'username':name,'password':password,'email':email,'emailVerified':'true'})
        return{'status':'Nuevo Usuario Añadido'}
    def put(self):  
        usr=mongo.db.user
        #TODO
        return{'status':'usuario modificado'}

class Noticias(Resource): 
    def get(self):
        usr=mongo.db.noticia
        output=[]
        for s in usr.find():
            output.append({'titulo':s['titulo'],'subtitulo':s['subtitulo'],'cuerpo':s['cuerpo'],'comentarios':s['comentarios']})
        return jsonify({'result':output})

    def post(self):
        usr=mongo.db.noticia
        title=request.json['titulo']
        subtitle=request.json['subtitulo']
        img=request.json['img']
        body=request.json['cuerpo']
        comments=request.json['comentarios']
        usr.insert_one({'titulo':title,'subtitulo':subtitle,'img':img,'cuerpo':body,'comentarios':comments})
        return{'status':'Nueva noticia añadida'}

    def put(self):
        usr=mongo.db.noticia
        #TODO 

        return{'status':'noticia actualizada correctamente'}

api.add_resource(Users,'/users')
api.add_resource(Noticias,'/noticias')

if __name__ =='__main__':
    app.run(port='5000')
