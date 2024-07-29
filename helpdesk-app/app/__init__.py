from flask import Flask
from flask_cors import CORS
from .config import Config
from .extensions import db, migrate


def create_app():
    app = Flask(__name__, static_folder='../react-app/build', static_url_path='/')
    app.config.from_object(Config)
    CORS(app)

    db.init_app(app)
    migrate.init_app(app, db)

    from .api.ticket_routes import tickets_bp
    from .api.comment_routes import comments_bp
    app.register_blueprint(tickets_bp, url_prefix='/tickets')
    app.register_blueprint(comments_bp, url_prefix='/comments')

    @app.route('/')
    def index():
        return app.send_static_file('index.html')

    with app.app_context():
        from . import models

    return app
