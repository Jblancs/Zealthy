from flask import Blueprint, request, jsonify
from ..models import Comment, Ticket
from .. import db

comments_bp = Blueprint('comments_bp', __name__)

@comments_bp.route('/tickets/<int:ticket_id>', methods=['POST'])
def add_comment(ticket_id):
    data = request.get_json()

    comment = Comment(
        ticket_id=ticket_id,
        content=data['content']
    )
    db.session.add(comment)
    db.session.commit()
    return jsonify(comment.to_dict(), 201)

@comments_bp.route('/tickets/<int:ticket_id>', methods=['GET'])
def get_comments(ticket_id):
    comments = Comment.query.filter_by(ticket_id=ticket_id).order_by(Comment.id.desc()).all()
    return jsonify([comment.to_dict() for comment in comments]), 200

@comments_bp.route('/comments/<int:comment_id>', methods=['DELETE'])
def delete_comment(comment_id):
    comment = Comment.query.get_or_404(comment_id)
    db.session.delete(comment)
    db.session.commit()
    return jsonify({'message': 'comment deleted successfully'}), 204
