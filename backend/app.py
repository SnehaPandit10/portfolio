from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/profile")
def profile():
    return jsonify({
        "name": "Sneha Pandit",

        "profession": "Software Developer | Dancer",

        "intro": "Hi, I’m Sneha. I’m a software developer with a passion for technology, creativity, fitness and dance. I enjoy building web applications and continuously learning new technologies.",

        "photo": "",

        "hobbies": [
            "Dance",
            "Fitness",
            "Travelling",
            "Learning new technologies"
        ],

        "instagram": "https://www.instagram.com/snehapandit__/",

        "linkedin": "https://www.linkedin.com/in/sneha-pandit-093207192/"
    })


if __name__ == "__main__":
    app.run(debug=True, port=5001)