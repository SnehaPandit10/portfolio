from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/profile")
def profile():
    return jsonify({
        "name": "Sneha Pandit",
        "profession": "Software Developer | Dancer",
        "intro": "I build web applications, move to music, and train hard. Right now I'm learning to build AI-powered products.",
        "currently": "Learning to build AI projects",

        # edit this list to match your real stack
        "skills": ["Python", "Flask", "React", "JavaScript", "REST APIs", "Git"],

        # ADD YOUR AI PROJECTS HERE as you build them.
        # status: "Building" | "Live" | "Planned"
        "projects": [
            {
                "title": "Movie Recommender",
                "description": "An interactive movie recommendation system that suggests similar movies based on content such as genre, cast, and director. Built using machine learning and content-based filtering, it helps users discover movies and explore additional details, including posters and movie information.",
                "status": "Completed",
                "tech": ["Machine Learning", "StreamLit", "Python","Scikit-learn"],
                "github": "https://github.com/SnehaPandit10/portfolio",
                "demo": "https://movieflix-movie-recommender.streamlit.app/"
            },
            {
                "title": "Email Spam Classifier",
                "description": "A machine learning model that classifies emails as spam or legitimate (ham) based on their content, It uses NLP techniques such as text clustering tokenization , and TF-IDF vectorization, the trains classifiers such as Naive Bayes and Logistic Regression, evaluated on prediction, recall, and F1 score.",
                "status": "On-going",
                "tech": ["Machine Learning","NLP","Scikit-learn"],
                # "github": "https://github.com/SnehaPandit10/portfolio",
                # "demo": "https://movieflix-movie-recommender.streamlit.app/"
            }
        ],

        "hobbies": [
            {
                "name": "Dance",
                "description": "Where I switch off and let the music lead.",
                "links": [
                    "https://www.instagram.com/reel/DTUuYYVkbpD/",
                    # "https://www.instagram.com/reel/Db-H-Z9ioho/",
                    # "https://www.instagram.com/reel/DZUJbfTxGhG/",
                    # "https://www.instagram.com/reel/DEoWR01NbE8/"
                ]
            },
            {
                "name": "Fitness",
                "description": "Strength training keeps me consistent in everything else.",
                "links": [
                    "https://www.instagram.com/reel/DbdL5hNCJ60/",
                    # "https://www.instagram.com/reel/DdEe1STh087/",
                    # "https://www.instagram.com/reel/DbXMDH6i_Vz/"
                ]
            },
            {
                "name": "Traveling",
                "description": "New places, new ideas.",
                "links": ["https://www.instagram.com/p/DVOZu9dgQaF/"]
            }
        ],

        "instagram": "https://www.instagram.com/snehapandit__/",
        "linkedin": "https://www.linkedin.com/in/sneha-pandit-093207192/",
        "github": "https://github.com/SnehaPandit10"
    })


@app.route("/")
def home():
    return "Portfolio backend is running!"


if __name__ == "__main__":
    app.run(debug=True, port=5001)
