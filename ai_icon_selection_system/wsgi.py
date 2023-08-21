import os

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Import the Python file that contains the application logic.
from app import api

# Register the API routes with the Flask application.
app.register_blueprint(api)

# Set the secret key for the Flask application.
app.secret_key = os.environ.get('SECRET_KEY')

# Run the Flask application.
if __name__ == '__main__':
    app.run(debug=True)
