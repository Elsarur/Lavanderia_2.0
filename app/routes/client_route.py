from flask import jsonify, request, Blueprint
from app.controllers.client_controllers import create_client, search_client_by_name, search_client_by_phone, update_client, delete_client

client_bp = Blueprint("client_bp", __name__, url_prefix="/clients")

@client_bp.route("/create", methods=["POST"])
def create():
    data = request.json
    name = data.get('name')
    phone_number = data.get('phone_number')
    address = data.get('address')

    if not name or not phone_number or not address:
        return jsonify({"error":"Los datos basicos de un cliente son obligatorios"}), 400
    
    client = create_client(name, phone_number, address)
    return jsonify({
        "msg": "Cliente creado con exito :3",
        "client": client.to_dict()
    }),200


@client_bp.route("/search/name", methods=["GET"])
def search_by_name():
    name = request.args.get("name")
    clients = search_client_by_name(name)
    #FEA PERO ENTENDIBLE
    """data = []
    for client in clients:
        data.append(client.to_dict())"""
    #FANCY PERO DIFERENTE DE EJECUTAR
    data = [client.to_dict() for client in clients]
    return jsonify(data), 200

@client_bp.route("/search/phone", methods=["GET"])
def search_by_phone():
    phone = request.args.get("phone")
    client = search_client_by_phone(phone)
    if not client:
        return jsonify({"error": "Cliente no encontrado :/"}), 400
    return jsonify(client.to_dict()),200

@client_bp.route("/update/<int:client_id>", methods=["PUT"])
def update(client_id):
    data= request.json
    client = update_client(client_id, data)
    if not client:
        return jsonify({"error": "Cliente no encontrado :/"}), 400
    return jsonify({"msg":"Yeiiiii, cliente actualizado con exito :3 !!"}), 200

@client_bp.route("/delete/<int:client_id>", methods=["DELETE"])
def delete(client_id):
    client = delete_client(client_id)
    if not client:
        return jsonify({"error": "Cliente no encontrado :/"}), 400
    return jsonify({"msg":"Yeiiiii, cliente eliminado con exito :3 !!"}),200