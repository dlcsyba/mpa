from datetime import datetime
from flask import render_template, session, redirect, url_for

from . import main
from app import db
from app.models import User


@main.route('/', methods=['GET', 'POST'])
def index():
    return 'hello, world'
