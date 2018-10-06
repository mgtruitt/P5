import os

import json

import pandas as pd
import numpy as np
import pymongo

from flask import Flask, jsonify, render_template

from scrape_plastic import scrape

app = Flask(__name__)

###########################################################################

conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

###########################################################################

doc = scrape()

db = client.P5

db.plastic_news.drop()

db.plastic_news.insert(doc)


###########################################################################

#################################################
# Routes
#################################################

@app.route("/")
def index():
    document = db.plastic_news.find()[0]
    return render_template("index.html", dict = document)


@app.route("/countryData")
def countryData():
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    
    db = client.P5
    features = []
    countries = db.countries.find()
    for country in countries: 
        del country['_id']
        features.append(country)
    geojson = {"type": "FeatureCollection", "features": features}

    return jsonify(geojson)

@app.route("/countryData/<countr>")
def countryDataCountry(countr):
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    
    db = client.P5

    features = []
    countries = db.countries.find({"properties.ADMIN":countr})
    for country in countries:
        del country['_id']
        features.append(country)
    geojson2 = {"type": "FeatureCollection", "features": features}

    return jsonify(geojson2)
    
        # Use Pandas to perform the sql query
    # stmt = db.session.query(Samples).statement
    # df = pd.read_sql_query(stmt, db.session.bind)

    # # Return a list of the column names (sample names)
    # return jsonify(list(df.columns)[2:])


# @app.route("/metadata/<sample>")
# def sample_metadata(sample):
#     """Return the MetaData for a given sample."""
#     sel = [
#         Samples_Metadata.sample,
#         Samples_Metadata.ETHNICITY,
#         Samples_Metadata.GENDER,
#         Samples_Metadata.AGE,
#         Samples_Metadata.LOCATION,
#         Samples_Metadata.BBTYPE,
#         Samples_Metadata.WFREQ,
#     ]

#     results = db.session.query(*sel).filter(Samples_Metadata.sample == sample).all()

#     # Create a dictionary entry for each row of metadata information
#     sample_metadata = {}
#     for result in results:
#         sample_metadata["sample"] = result[0]
#         sample_metadata["ETHNICITY"] = result[1]
#         sample_metadata["GENDER"] = result[2]
#         sample_metadata["AGE"] = result[3]
#         sample_metadata["LOCATION"] = result[4]
#         sample_metadata["BBTYPE"] = result[5]
#         sample_metadata["WFREQ"] = result[6]

#     print(sample_metadata)
#     return jsonify(sample_metadata)


# @app.route("/jameck/<country>")
# def samples(sample):
#     """Return `otu_ids`, `otu_labels`,and `sample_values`."""
#     stmt = db.session.query(Samples).statement
#     df = pd.read_sql_query(stmt, db.session.bind)

#     # Filter the data based on the sample number and
#     # only keep rows with values above 1
#     sample_data = df.loc[df[sample] > 1, ["otu_id", "otu_label", sample]]
#     # Format the data to send as json
#     data = {
#         "otu_ids": sample_data.otu_id.values.tolist(),
#         "sample_values": sample_data[sample].values.tolist(),
#         "otu_labels": sample_data.otu_label.tolist(),
#     }

#     df = pd.DataFrame(data)
#     df = df.sort_values(by = ["sample_values"], ascending=False)
#     data = {
#         "otu_ids" : df["otu_ids"].tolist(),
#         "sample_values" : df["sample_values"].tolist(),
#         "otu_labels" : df["otu_labels"].tolist()
#     }
#     return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
