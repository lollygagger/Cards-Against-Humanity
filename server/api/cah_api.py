from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
from flask import jsonify
from api.utils import *
import random

class BlackCard(Resource):
    def get(self):
        result = exec_get_all("SELECT content FROM CARDS WHERE is_black_card = true")
        randIndex = random.randint(0, len(result) - 1)
        return result[randIndex]

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('content')
        args = parser.parse_args()

        exec_commit("INSERT INTO cards(content, is_black_car) VALUES (%s, true)", [args['content']])

class StarterCards(Resource):
    def get(self):
        cards = []
        result = exec_get_all("SELECT content FROM cards WHERE is_black_card = false")
        for i in range(7):
            randIndex = random.randint(0, len(result) - 1)
            cards.append(result[randIndex][0])
        return cards

class WhiteCard(Resource):
    def get(self):
        result = exec_get_all("SELECT content FROM cards WHERE is_black_card = false")
        randIndex = random.randint(0, len(result) - 1)
        return result[randIndex]


    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('content')
        args = parser.parse_args()

        exec_commit("INSERT INTO cards(content, is_black_car) VALUES (%s, false)", [args['content']])


class Players(Resource):
    def get(self):
        exec_get_all("SELECT username, play_card FROM players")

    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username')
        parser.add_argument('playcard')
        args = parser.parse_args()

        exec_commit("UPDATE players SET play_card=%s WHERE username=%s", [args['playcard'], args['username']])

class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username')
        args = parser.parse_args()

        exec_commit("INSERT INTO players(username) VALUES (%s)", [args['username']])

