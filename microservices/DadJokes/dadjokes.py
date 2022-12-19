# dadjokes.py
from flask import Flask
import requests
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/dadjoke", methods=['GET'])
def random_dad_joke():
    random_dad_joke = requests.get("https://icanhazdadjoke.com/",
                                   headers={"Accept": "application/json"})
    random_dad_joke = json.loads(random_dad_joke.text)["joke"]

    return json.dumps(random_dad_joke)

