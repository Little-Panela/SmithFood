from flask import Flask

from playhouse.migrate import *

from psycopg2 import connect, extensions

autocommit = extensions.ISOLATION_LEVEL_AUTOCOMMIT

try:
    conn = connect(dbname='postgres', user='postgres', host='localhost',
                   password='admin')
    conn.set_isolation_level(autocommit)
    cur = conn.cursor()
    cur.execute('CREATE DATABASE "smith-food"')
    cur.close()
    conn.close()
except:
    print('Db exists')

db = PostgresqlDatabase(database='smith-food', host='localhost',
                        port=5432, user='postgres', password='admin')
db.init(database='smith-food')
app = Flask(__name__)



@app.before_request
def _db_connect():
    db.connect()


@app.before_request
def _db_close(exc):
    if not db.is_closed():
        db.close()

import modules.api.routes.products