from modules.database.models.Product import Product
from modules.database.models.Category import Category


class ProductService():
    def __init__(self) -> None:
        pass

    def list_all_products(self):
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

    def list_one_product(self, p_id):
        product = (Product
                   .select()
                   .where(Product.product_id == p_id)
                   .dicts())
        return list(product)

    def update_product(self, p_id, new_price):
        Product.set_by_id(
            p_id, {'sell_price': new_price})  # type: ignore
        return self.list_one_product(p_id)

    def increment_stock(self, p_id, new_stock):
        Product.set_by_id(
            p_id, {'stock': stock + new_stock})  # type: ignore
        return self.list_one_product(p_id)


product_service = ProductService()
