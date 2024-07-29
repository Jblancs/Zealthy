from flask import Blueprint, request, jsonify
from ..models import Ticket
from ..extensions import db

tickets_bp = Blueprint('tickets', __name__)

@tickets_bp.route('/', methods=['POST'])
def create_ticket():
    data = request.get_json()
    new_ticket = Ticket(
        name=data['name'],
        email=data['email'],
        description=data['description']
    )

    db.session.add(new_ticket)
    db.session.commit()

    return jsonify(new_ticket.to_dict())

@tickets_bp.route('/', methods=['GET'])
def get_all_tickets():
    tickets = Ticket.query.order_by(Ticket.id.desc()).all()
    print(tickets)
    return jsonify([ticket.to_dict() for ticket in tickets])

@tickets_bp.route('/<int:id>', methods=['GET'])
def get_ticket_by_id(id):
    ticket = Ticket.query.get_or_404(id)
    return jsonify(ticket.to_dict())

@tickets_bp.route('/<int:id>', methods=['PUT'])
def update_status(id):
    data = request.get_json()
    ticket = Ticket.query.get_or_404(id)

    ticket.status = data['status']
    db.session.commit()

    return jsonify(ticket.to_dict())
