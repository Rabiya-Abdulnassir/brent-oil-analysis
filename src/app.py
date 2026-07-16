from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from routes import *

print(app.url_map)

if __name__ == "__main__":
    app.run(debug=True)