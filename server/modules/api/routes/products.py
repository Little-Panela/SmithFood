import json
from app import app

from modules.database.models.Product import *
from modules.database.models.Category import *

from flask import request, jsonify


@app.route('/products', methods=['GET'])
def list_all_products():
    categories = (Category.select().dicts())
    for i in categories:
        try:
            i["products"] = list(Product
                                 .select()
                                 .where(Product.category == i["category_id"])
                                 .dicts())
        except:
            i["products"] = []
    return list(categories)


@app.route('/products/<p_id>', methods=['GET'])
def list_one_product(p_id):
    product = (Product
               .select()
               .where(Product.product_id == p_id)
               .dicts())
    return list(product)


@app.route('/products/<p_id>/price', methods=['PATCH'])
def update_product(p_id):
    body = request.get_json()
    Product.set_by_id(
        p_id, {'sell_price': body["new_price"]})  # type: ignore
    return list_one_product(p_id)


@app.route('/products/<p_id>/stock', methods=['PUT'])
def increment_stock(p_id):
    body = request.get_json()
    Product.set_by_id(
        p_id, {'stock': stock + body["new_stock"]})  # type: ignore
    return list_one_product(p_id)
