from flask import Blueprint, request, jsonify
from .models import Ticket
from . import db

bp = Blueprint('routes', __name__)

@bp.route('/tickets', methods=['POST'])
def create_ticket():
    data = request.get_json()
    new_ticket = Ticket(
        name=data['name'],
        email=data['email'],
        description=data['description']
    )

    db.session.add(new_ticket)
    db.session.commit()

    # return jsonify({'message': 'Ticket created successfully'}), 201
    return jsonify(new_ticket.to_dict())

@bp.route('/tickets', methods=['GET'])
def get_all_tickets():
    tickets = Ticket.query.all()

    return jsonify([ticket.to_dict() for ticket in tickets])

@bp.route('/tickets/<int:id>', methods=['GET'])
def get_ticket_by_id(id):
    ticket = Ticket.query.get_or_404(id)

    return jsonify(ticket.to_dict())

@bp.route('/tickets/<int:id>', methods=['PUT'])
def update_status(id):
    data = request.get_json()
    ticket = Ticket.query.get_or_404(id)

    ticket.status = data['status']
    db.session.commit()

    return jsonify({'message': 'Ticket updated successfully'})
