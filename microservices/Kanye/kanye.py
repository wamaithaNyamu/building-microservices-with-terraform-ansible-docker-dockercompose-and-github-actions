from flask import Flask
import requests
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/kanye", methods=['GET'])
def random_kanye_joke():
    random_kanye_joke = requests.get("https://api.kanye.rest",
                                   headers={"Accept": "application/json"})
    random_kanye_joke = json.loads(random_kanye_joke.text)["quote"]

    return json.dumps(random_kanye_joke)


