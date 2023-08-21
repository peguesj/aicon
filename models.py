from flask_mongoengine import MongoEngine

db = MongoEngine()

class BrandAbstract(db.Document):
    description = db.StringField(required=True)

