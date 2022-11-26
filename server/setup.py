from setuptools import setup

from app import initApi

setup(
    name='peeweeapi',
    version='1.0',
    install_requires=[
        'Flask',
        'Peewee',
    ],
    readme='README.md',
    description='Peewee + Flask = <3',
)

if __name__ == '__main__':
    initApi()