from app import app
from flask import jsonify
import pandas as pd
from pathlib import Path

# Get the folder where routes.py is located
BASE_DIR = Path(__file__).resolve().parent

# Results folder inside src
RESULTS_DIR = BASE_DIR / "results"

prices = pd.read_csv(RESULTS_DIR / "historical_prices.csv")
change = pd.read_csv(RESULTS_DIR / "change_points.csv")
events = pd.read_csv(RESULTS_DIR / "event_correlations.csv")

@app.route("/prices")
def get_prices():
    return jsonify(prices.to_dict(orient="records"))

#change point endpoint
@app.route("/change-point")
def get_change_point():
    return jsonify(change.to_dict(orient="records"))
#event correlation end 

@app.route("/events")
def get_events():
    return jsonify(events.to_dict(orient="records"))

# health check end points 

@app.route("/")
def home():
    return {
        "message":"Brent Oil Dashboard API"
    }


