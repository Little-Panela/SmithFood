from modules.database.models.BaseModel import BaseModel
from modules.database.models.Category import Category

from peewee import AutoField, TextField, IntegerField, DoubleField, ForeignKeyField

class Product(BaseModel):
    product_id = AutoField()
    name = TextField()
    desc = TextField()
    sells = IntegerField()
    stock = IntegerField()
    sell_price = DoubleField()
    production_price = DoubleField()
    category = ForeignKeyField(model=Category, backref='products')

    class Meta:
        table_name = 'product'

Product.create_table()