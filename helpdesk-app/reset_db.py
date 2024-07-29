from flask import current_app
from flask.cli import with_appcontext
import click
from app.extensions import db
from app import create_app
from app.models import Ticket, Comment  # Import all models

app = create_app()

@app.cli.command("reset-db")
@with_appcontext
def reset_db():
    """Drops and recreates the database tables."""
    db.drop_all()
    db.create_all()
    db.session.commit()
    click.echo("Database has been reset.")

if __name__ == "__main__":
    app.run()
