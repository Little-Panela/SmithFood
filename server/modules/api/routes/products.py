from app import app


@app.route('/products', methods=['GET'])
def list_all_products():
    return 'todos os produtos'

@app.route('/products/<id>', methods=['GET'])
def list_one_product(id):
    return f'um produto {id}'

@app.route('/products', methods=['POST'])
def create_product(id):
    return f'criar produto {id}'

@app.route('/products/<id>', methods=['PATCH'])
def update_product(id):
    return f'atualizar produto {id}'

@app.route('/products/<id>', methods=['DELETE'])
def delete_product(id):
    return f'deletar produto {id}'

@app.route('/products/<id>/stock', methods=['PUT'])
def increment_stock(id):
    return f'incrementar estoque {id}'
