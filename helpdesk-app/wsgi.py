import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'helpdesk-app'))

from app import create_app
app = create_app()

if __name__ == "__main__":
    app.run()
