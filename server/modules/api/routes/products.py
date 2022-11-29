from app import app

from modules.database.models.Product import *
from modules.database.models.Category import *

from flask import request

from modules.database.services.product_service import product_service


@app.route('/products', methods=['GET'])
def list_all_products():
    return product_service.list_all_products()


@app.route('/products/<p_id>', methods=['GET'])
def list_one_product(p_id):
    return product_service.list_one_product(p_id)


@app.route('/products/<p_id>/price', methods=['PATCH'])
def update_product(p_id):
    return return product_service.update_product(p_id, request.get_json()["new_price"]) # type: ignore


@app.route('/products/<p_id>/stock', methods=['PUT'])
def increment_stock(p_id):
    return product_service.increment_stock(p_id, request.get_json()["new_stock"]) # type: ignore

@app.route('/products/<p_id>/minstock', methods=['GET'])
def get_min_stock_and_price(p_id):
    return product_service.get_min_stock_and_price(p_id)
