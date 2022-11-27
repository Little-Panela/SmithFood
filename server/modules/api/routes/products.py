from app import app

from modules.database.models.Product import *
from modules.database.models.Category import *

from peewee import JOIN


@app.route('/products', methods=['GET'])
def list_all_products():
    products = (Product
                .select()
                .dicts())
    for i in products:
        i["category"] = (Category
                         .select()
                         .where(Category.category_id == i["category"])
                         .dicts()
                         .get())
    return list(products)


@app.route('/products/<p_id>', methods=['GET'])
def list_one_product(p_id):
    products = (Product
                .select()
                .where(Product.product_id == p_id)
                .dicts())
    return list(products)


@app.route('/products/<id>', methods=['PATCH'])
def update_product(id):
    return f'atualizar produto {id}'


@app.route('/products/<id>/stock', methods=['PUT'])
def increment_stock(id):
    return f'incrementar estoque {id}'
