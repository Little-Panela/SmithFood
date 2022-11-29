from modules.database.models.Product import Product
from modules.database.models.Category import Category

from sympy import symbols, Eq, solve, minimum

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
    
    def get_min_stock_and_price(self, p_id):
        product = self.list_one_product(p_id)
        x = symbols('x')
        demand_equation = x**2 + 70*x + product[0].production_price*100
        # x is our stock quantity, and the production price is the sum of all impact costs like tech, transport, re-sell, etc...
        # x² defines how lucrative it will be
        # 70x defines how much it will produce
        price = round(minimum(demand_equation, x)/100, 2)
        quantity = round(solve(Eq(demand_equation, price), x)/100, 2)
        return [quantity, price]
        


product_service = ProductService()