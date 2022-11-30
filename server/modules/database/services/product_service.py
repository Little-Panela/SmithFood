from modules.database.models.Category import Category
from modules.database.models.Product import Product
from sympy import Eq, minimum, solve, symbols


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
        demand_equation = x**2 + 90*x + product[0]["production_price"]
        # x is our stock quantity, and the production price is the sum of all impact costs like tech, transport, re-sell, etc...
        # x² defines how lucrative it will be
        # 70x defines the % of sell
        price = round(minimum(demand_equation, x), 2) * -1
        if price <= product[0]["production_price"]:
            price = price + product[0]["production_price"]
        quantity = round(solve(Eq(demand_equation, price), x)[0]) * -1
        return dict({"price": float(price/100), "quantity": int(quantity)})


product_service = ProductService()
