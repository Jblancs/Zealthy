from ..extensions import db
from datetime import datetime
from ..extensions import environment, SCHEMA, add_prefix_for_prod

class Comment(db.Model):
    __tablename__ = 'Comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    ticket_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Tickets.id')), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)

    def to_dict(self):
        return {
            'id': self.id,
            'ticket_id': self.ticket_id,
            'content': self.content,
            'created_at': self.created_at.isoformat()
        }
