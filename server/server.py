from flask import Flask
from flask_restful import Resource, Api


from api.utils import *
from api.cah_api import *


app = Flask(__name__) #create Flask instance

api = Api(app) #api router

if __name__ == '__main__':
    print("Loading db")
    exec_sql_file('deploy.sql')
    print("Starting flask")
    app.run(debug=True), #starts Flask



