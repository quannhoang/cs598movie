import numpy as np

from flask import Flask, request
from flask_cors import CORS
from ml import MOVIE_RECOMMENDER, cosineSimilarityMatrixTop30, df_R
app = Flask(__name__)
CORS(app)



@app.route('/api/movies_for_genre', methods=['GET'])
def movies_for_genre():
    # get the genre from the request
    genre = request.args.get('genre')
    print(genre)
    return {"movies": MOVIE_RECOMMENDER.get_movie_ids_for_genre(genre)}

@app.route('/api/movies_for_ratings', methods=['POST'])
def movies_for_ratings():
    # get rating array from the request
    data = request.get_json()["ratings"]
    
    rating_frame = np.ones((3706, 1))
    rating_frame[:, :] = np.nan

    for id, rating in data.items():
        print(id, rating)
        index = list(df_R.columns).index("m"+str(id))

        rating_frame[index, :] = rating["score"] # use score

    recommended = MOVIE_RECOMMENDER.get_movie_ids_for_ratings(rating_frame, cosineSimilarityMatrixTop30)
    recommended = df_R.columns.values[recommended]
    print(recommended)
    recommended = [int(x[1:]) for x in recommended]
    # return indices of top 10 movies
    return {"movies": recommended}

if __name__ == '__main__':
    app.run(port=5328)