from flask import Flask, jsonify, request
from flask_cors import CORS
import parser
import db
import json

app = Flask(__name__)
CORS(app)  # Разрешаем кросс-доменные запросы

# Пример данных
# notes = [
#     {"id": 1, "title": "Meeting", "content": "Discuss project"},
#     {"id": 2, "title": "Grocery List", "content": "Buy milk"},
# ]

# @app.route('/api/notes', methods=['GET'])
# def get_notes():
#     print (notes)
#     return jsonify(notes)

# @app.route('/api/notes', methods=['POST'])
# def add_note():
#     new_note = request.get_json()
#     notes.append(new_note)
#     print(notes)
#     return jsonify(new_note), 201





@app.route("/api/events", methods=["GET"])
def get_data():
    return parser.get_response()

@app.route("/api/report",methods=["POST"]) #ОТЧЕТ
def get_db_data():
    try:
        new_data = request.get_json()
        print (new_data)
        print (type(new_data))
        db.add_report(new_data)
        return jsonify(status="ok")
    except Exception as ex: print ("error ", ex)

@app.route("/api/prediction")
def get_pred_data():
    return db.get_stats()

@app.route("/api/warning")
def get_warning_data():
    return db.get_appl()

@app.route("/api/cameras")
def get_cameras_data():
    with open("camera_data.json","r",encoding="utf-8") as file:
        data = json.load(file)
    print ("Succesfully sent data")
    return data

# @app.route("/api/request")
# def get_req():


# new_data = {
#     "address": "Прапорщика 222",
#     "trouble": "ЧС"
# }
# print ("hello")
# db.add_report(new_data)


if __name__ == '__main__':
    app.run(debug=False)
