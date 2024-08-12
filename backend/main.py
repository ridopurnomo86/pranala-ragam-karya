from flask import Flask, Response, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

def triangle(nums):
    number_arr = []
    string_length = 1
    for num in range(len(str(nums))):
        if (num >= 1): string_length *= 10
        number_arr.append(str(nums)[num] + str(string_length))

    return "/n".join(number_arr)

def odd(nums):
    number_arr = [0]
    for i in range(nums):
        return None

@app.route("/triangle", methods=["POST"])
def main():
    data = request.get_json()
    number = data.get('number', '')
    users = {"type": "success", "data": triangle(int(number))}
    response = Response(response=json.dumps(users), status=200, mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response

@app.route("/odd", methods=["POST"])
def main():
    data = request.get_json()
    number = data.get('number', '')
    users = {"type": "success", "data": triangle(int(number))}
    response = Response(response=json.dumps(users), status=200, mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


