from flask import Flask, jsonify, request
from flask_cors import CORS
import parser



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




if __name__ == '__main__':
    app.run(debug=False)
