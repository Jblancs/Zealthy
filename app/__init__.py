from flask import Flask, send_from_directory
from flask_cors import CORS
from sqlalchemy import text
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import logging
from logging.handlers import RotatingFileHandler
import os

def configure_logging(app):
    # Create a logs directory if it doesn't exist
    if not os.path.exists('logs'):
        os.mkdir('logs')

    # Create a file handler
    file_handler = RotatingFileHandler('logs/app.log', maxBytes=10240, backupCount=10)

    # Set the logging level (DEBUG, INFO, WARNING, ERROR, CRITICAL)
    file_handler.setLevel(logging.INFO)

    # Create a log format
    formatter = logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
    )
    file_handler.setFormatter(formatter)

    # Add the file handler to the app's logger
    app.logger.addHandler(file_handler)

    # Set the logger level
    app.logger.setLevel(logging.INFO)
    app.logger.info('Application startup')

# ---------------------------------------------------------------------------

app = Flask(__name__, static_folder='../react-app/build', static_url_path='/')
# app.config.from_object(Config)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

configure_logging(app)

# app.logger.info(f'Database URL: {app.config["SQLALCHEMY_DATABASE_URI"]}')

from .api.ticket_routes import tickets_bp
from .api.comment_routes import comments_bp
app.register_blueprint(tickets_bp, url_prefix='/tickets')
app.register_blueprint(comments_bp, url_prefix='/comments')

@app.route('/<path:path>')
def serve_static_file(path):
    return send_from_directory(app.static_folder, path)

@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)

# app.logger.info('Application startup')
# try:
#     app.logger.info('Attempting to connect to the database...')
#     with app.app_context():
        # db.session.execute(text('SELECT 1'))
    # app.logger.info('Database connection successful')
# except Exception as e:
#     app.logger.error('Database connection failed', exc_info=True)

# @app.route('/')
# def index():
#     return app.send_static_file('index.html')

# with app.app_context():
#     from . import models
