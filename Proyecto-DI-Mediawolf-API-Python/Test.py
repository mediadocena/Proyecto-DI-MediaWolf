from requests import put,get,post
import json
print(get('http://127.0.0.1:5000/users').json())
usuario={
    'realm':'user',
    'username':'Pablo',
    'password':'dbc23',
    'email':'mail@mail.com'
}
res = json.dumps(usuario)
print('\n',post('http://127.0.0.1:5000/users',data=res))
