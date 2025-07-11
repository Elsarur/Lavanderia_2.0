from app.database.db import db
from datetime import datetime

class Order(db.Model):
    __tablename__ = 'orders'
    
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    estimated_delivery_date = db.Column(db.DateTime, nullable=True)
    real_delivery_date = db.Column(db.DateTime)
    state = db.Column(db.String(20), default='recibido')  #recibido, en proceso, entregado, listo
    total = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Boolean, default=False)
    # Relaciones inversas :3
    garments = db.relationship('Garment', backref='order', lazy=True)#lazy sirve para hacer o no la consulta 
    # Relación con el cliente 

    def to_dict(self, garment_link: bool = False):
        order = {
            'id': self.id,
            'client_id': self.client_id,
            'user_id': self.user_id,
            'created_at':self.created_at,
            'estimated_delivery_date':self.estimated_delivery_date,
            'real_delivery_date':self.real_delivery_date,
            'state':self.state,
            'total':self.total,
            'pagado':self.pagado,
        }
        if garment_link:
            order['garment'] = self.garments
        return order