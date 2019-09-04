from flask import Blueprint

main = Blueprint('main', __name__)

from . import views, errors  # 置于init.py末尾，避免循环导入依赖
