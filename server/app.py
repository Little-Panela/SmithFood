from flask import Flask
from playhouse.migrate import PostgresqlDatabase
from psycopg2 import connect, extensions

autocommit = extensions.ISOLATION_LEVEL_AUTOCOMMIT

try:
    conn = connect(dbname='postgres', user='postgres', host='localhost',
                   password='postgres')
    conn.set_isolation_level(autocommit)
    cur = conn.cursor()
    cur.execute('CREATE DATABASE "smith-food"')
    cur.close()
    conn.close()
except:
    print('Db exists')

db = PostgresqlDatabase(database='smith-food', host='localhost',
                        port=5432, user='postgres', password='postgres')
db.init(database='smith-food')
app = Flask(__name__)


@app.before_request
def _db_connect():
    db.connect()


@app.before_request
def _db_close():
    if not db.is_closed():
        db.close()


@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    # Other headers can be added here if needed
    return response

import modules.api.routes.products
