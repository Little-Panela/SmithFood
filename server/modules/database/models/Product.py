from modules.database.models.BaseModel import BaseModel
from modules.database.models.Category import Category

from peewee import *


class Product(BaseModel):
    product_id = UUIDField(primary_key=True)
    name = TextField()
    desc = TextField()
    sells = IntegerField()
    stock = IntegerField()
    sell_price = DoubleField()
    production_price = DoubleField()
    category = ForeignKeyField(model=Category, backref='products')

    class Meta:
        table_name = 'category'

Product.create_table()