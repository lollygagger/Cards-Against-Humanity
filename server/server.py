from flask import Flask
from flask_restful import Resource, Api


from api.utils import *
from api.cah_api import *


app = Flask(__name__) #create Flask instance

api = Api(app) #api router

api.add_resource(WhiteCard, '/whitecard')
api.add_resource(BlackCard, '/blackcard')
api.add_resource(Login, '/login')
api.add_resource(Players, '/players')
api.add_resource(StarterCards, '/startercards')

if __name__ == '__main__':
    print("Loading db")
    exec_sql_file('deploy.sql')
    print("Starting flask")
    app.run(debug=True), #starts Flask



