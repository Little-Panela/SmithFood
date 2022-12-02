# Backend SmithFood

## Dependencies
- [Python 3.11^](https://www.python.org/)
- [Sympy](https://pypi.org/project/sympy/)
- [Virtualenv](https://pypi.org/project/virtualenv/)
- [Peewee](https://pypi.org/project/peewee/)
- [Psycopg2](https://pypi.org/project/psycopg2/)
- [Flask](https://pypi.org/project/flask/)
- [Flask-Cors](https://pypi.org/project/flask-cors/)

- [PostgreSQL](https://www.postgresql.org/)


## Starting
Install virtualenv: `pip install virtualenv`
Then start virtualenv to install all dependencies:
```sh
virtualenv . && pip install sympy peewee psycopg2-binary Flask Flask-cors
```

After that, start up your database by:
1. Check host, user and password on [app.py](https://github.com/Little-Panela/SmithFood/blob/master/server/app.py)
2. Change in case you need

And then finally use:
```sh
flask run
```

PS:
If in your terminal says: "Db exists", its ok !

## Routes:
- /products
  |- / -> GET -> returns all products by category
  |- /:id
    |- / -> GET -> returns one product
    |- /stock -> PUT -> increments stock by value recieved in body request
    |- /price -> PATCH -> update sell_price by value recieved in body request
    |- /minstock -> GET -> returns most optimized stock and price to that product

## Schemas:
- /stock -> body: {"new_stock": <number>}
- /price -> body: {"new_price": <double>}

