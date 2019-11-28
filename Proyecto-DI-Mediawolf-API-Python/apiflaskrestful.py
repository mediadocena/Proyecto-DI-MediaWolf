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
        return{'status':'Nuevo Empleado Añadido'}

api.add_resource(Users,'/users')
if __name__ =='__main__':
    app.run(port='5000')
