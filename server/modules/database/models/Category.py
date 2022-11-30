from modules.database.models.BaseModel import BaseModel
from peewee import AutoField, TextField


class Category(BaseModel):
    category_id = AutoField()
    name = TextField()

    class Meta:
        table_name = 'category'


Category.create_table()
