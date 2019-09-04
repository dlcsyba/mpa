from flask import Flask
from flask_mail import Mail, Message
from flask_sqlalchemy import SQLAlchemy
from config import config

# app = Flask(__name__)  # Flask用这个参数决定程序的根目录，以便稍后能够找到相对于程序根目录的资源文件位置
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://dlcsyba:615157@localhost:3306/mpabase'
# app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

db = SQLAlchemy()
mail = Mail()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    mail.init_app(app)
    db.init_app(app)
    # 附加路由和自定义的错误页面
    from .main import main as main_bp
    app.register_blueprint(main_bp)

    return app

# @app.route('/')
# def hello_world():
#   return 'Hello World!'


# if __name__ == '__main__':
#    app.run()
