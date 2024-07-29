from . import db
from .models import Ticket

def create_db(app):
    with app.app_context():
        db.create_all()
