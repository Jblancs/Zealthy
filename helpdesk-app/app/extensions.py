from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

db = SQLAlchemy()
migrate = Migrate()
