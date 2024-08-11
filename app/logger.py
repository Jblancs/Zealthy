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
