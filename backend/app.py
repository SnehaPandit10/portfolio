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

        #"photo": "",

        "hobbies": [
            {
                "name": "Dance",
                "link": "https://www.instagram.com/reel/DTUuYYVkbpD/?stkn=Y3J2ZXkwYW44NXFw"
            },
            {
                "name": "Fitness",
                "link": "https://www.instagram.com/reel/DbdL5hNCJ60/?stkn=cTBlemR6NHllbm5r"
            },
            {
                "name": "Travelling",
                "link": "https://www.instagram.com/p/DVOZu9dgQaF/?img_index=3&stkn=MjhrMTdoYXlpbDVx"
            },
            {
                "name": "Learning new technologies",
                "link": "https://github.com/SnehaPandit10"
            }
        ],

        "instagram": "https://www.instagram.com/snehapandit__/",

        "linkedin": "https://www.linkedin.com/in/sneha-pandit-093207192/"
    })


@app.route("/")
def home():
    return "Portfolio backend is running!"


if __name__ == "__main__":
    app.run(debug=True, port=5001)