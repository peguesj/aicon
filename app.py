import os

from flask import Flask, jsonify, request
from flask_cors import CORS

from .models import BrandAbstract
from .utils import find_matching_icons

app = Flask(__name__)

# CORS configuration
CORS(app)

# API routes

@app.route('/brand_abstracts', methods=['GET'])
def get_brand_abstracts():
    brand_abstracts = BrandAbstract.query.all()
    return jsonify([brand_abstract.to_dict() for brand_abstract in brand_abstracts])

@app.route('/find_matching_icons', methods=['POST'])
def find_matching_icons():
    brand_abstract_data = request.json['brand_abstract']
    matching_icons, explanations, tags = find_matching_icons(brand_abstract_data)
    return jsonify({
        'matching_icons': matching_icons,
        'explanations': explanations,
        'tags': tags
    })

if __name__ == '__main__':
    app.run(debug=True)
