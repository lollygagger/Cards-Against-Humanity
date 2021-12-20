from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
from flask import jsonify
from utils import *

class BlackCard(Resource):
    def get(self):
        result = exec_get_all("SELECT ")

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('content')
        args = parser.parse_args()

        exec_commit("INSERT INTO cards(content, is_black_car) VALUES (%s, true)", [args[0]])


class WhiteCard(Resource):
    def get(self):
        result = exec_get_all("")

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('content')
        args = parser.parse_args()

        exec_commit("INSERT INTO cards(content, is_black_car) VALUES (%s, false)", [args[0]])

