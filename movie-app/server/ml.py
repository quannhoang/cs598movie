import numpy as np
import pandas as pd
import matplotlib.pylab as plt
import json
import pdb
import time

# load movies.dat
df_m = pd.read_csv("movies.dat", sep = '::', names = ['MovieID', 'Title', 'Genres'], encoding='latin-1')

# load ratings.dat
df_r = pd.read_csv("ratings.dat", sep = '::', names = ['UserID', 'MovieID', 'Rating', 'Timestamp'], encoding='latin-1')

# load users.dat
df_u = pd.read_csv("users.dat", sep = '::', names = ['UserID', 'Gender', 'Age', 'Occupation', 'Zip-code'], encoding='latin-1')

# Unzip cosineSim.zip
import zipfile
with zipfile.ZipFile("cosineSim.zip","r") as zip_ref:
    zip_ref.extractall(".")
# Unzip cosineSimTop30.zip
with zipfile.ZipFile("cosineSim30.zip","r") as zip_ref:
    zip_ref.extractall(".")

# # Get the unique genres
# all_genres = df_m['Genres']
# unique_genres = {}
# for movie in all_genres.values.tolist():
#     genres = movie.split("|")
#     for genre in genres:
#         if genre not in unique_genres:
#             unique_genres[genre] = []
#         else:
#             continue

# # step 1
# def averageRating(movieID, ratingDF):
#     movieRatings = ratingDF.loc[ratingDF['MovieID'] == movieID]['Rating']
#     if movieRatings.shape[0] > 500:
#         return np.average(movieRatings.values)
#     else:
#         return 0

# movie_ratings = []
# for i, row in df_m.iterrows():
#     movieID = row['MovieID']
#     aveRating = averageRating(movieID, df_r)
#     movie_ratings = movie_ratings + [aveRating]

# df_m['AverageRating'] = movie_ratings

# # step 2.1
# movies_by_genre_dict = unique_genres.copy()
# for i, row in df_m.iterrows():
#     movieID = row['MovieID']
#     aveRating = row['AverageRating']
#     genres = row['Genres']
#     title = row['Title']
#     for genre in genres.split('|'):
#         movies_by_genre_dict[genre].append([title, aveRating, movieID])

# # step 2.2
# for item in movies_by_genre_dict:
#     original_list = movies_by_genre_dict[item]
#     movies_by_genre_dict[item] = sorted(original_list, key=lambda x: x[1], reverse=True)

# # step 3
# # createa dictionary of tuples (Title, movieID) for each genre
# recommendation_by_genre = {}
# for item in movies_by_genre_dict:
#     recommendation_by_genre[item] = [(movie[0], movie[2]) for movie in movies_by_genre_dict[item][:10]]
# # save recommendation_by_genre dict to json file
# with open('recommendation_by_genre.json', 'w') as fp:
#     json.dump(recommendation_by_genre, fp)

# Content based filtering data
df_R = pd.read_csv("Rmat.csv")
values_to_subtract = []
for i, row in df_R.iterrows():
    nanMean = np.nanmean(row.values)
    values_to_subtract.append(nanMean)
df_subtracted = df_R.subtract(values_to_subtract, axis=0)

class MovieRecommender:
    def __init__(self):
        #print(recommendation_by_genre.keys())
        # load recommendation_by_genre.json
        with open('recommendation_by_genre.json', 'r') as fp:
            recommendation_by_genre = json.load(fp)
        self.recommendation_by_genre = recommendation_by_genre

    def get_movie_ids_for_genre(self, genre):
        """Returns a list of movie ids for the given genre"""
        # if genre is Children, change it to Children's
        if genre == "Children":
            genre = "Children's"
        return [item[1] for item in self.recommendation_by_genre[genre]]
    
    @staticmethod
    def CosS(i, j, df):
       """
       input are indexes of two columns, and the output is a 3706 by 3706 matrix, each item is the cosine similarity
       """
       col_i = df.iloc[:, i].values
       col_j = df.iloc[:, j].values
       non_na_index = np.invert(np.logical_or(np.isnan(col_i), np.isnan(col_j))) # both i and j are not nan
       if np.sum(non_na_index) < 3: # less than 3 common users rated these two movies
          return float('nan')
       else:
            col_i_com = col_i[non_na_index]
            col_j_com = col_j[non_na_index]
            return 0.5 + 0.5 * np.sum(col_i_com * col_j_com) / np.sqrt(np.sum(col_i_com**2)) / np.sqrt(np.sum(col_j_com**2))
        
    def get_movie_ids_for_ratings(cls, newuser, cosineSimilarityMatrixTop30):
        """
        input: newuser --> 3706 by 1
        """
        N, W = newuser.shape
        recommendation = np.zeros(N)
        rated_array = np.invert(np.isnan(newuser.reshape(N,-1)))
        rated_indices = np.where(rated_array)[0]
        # pdb.set_trace()
        for i in range(N):
            # print(i)
            start = time.time()
            if i in rated_indices: # skip this if the movie is already rated
                continue
            else:
                Sli = cosineSimilarityMatrixTop30[i]
                NN_index = np.invert(np.isnan(Sli)) # NN index of movie 
                overlap = NN_index[rated_indices] #np.logical_and(rated_index, NN_index) # user rated movie is in the NN of movie i
                if np.sum(overlap) < 1: # no overlap
                    continue
                else:
                    Sli_rated = np.nan_to_num(Sli[rated_indices]) # convert nan to 0
                    w_rated = newuser[rated_indices].flatten()
                    numerator = np.sum(Sli_rated * w_rated)
                    denominator = np.sum(Sli_rated)
                    recommendation[i] = numerator / denominator

        return np.argsort(recommendation)[-10:]



# Calculate the cosine matrix
N = df_subtracted.shape[1] # num of movies
try:
    cosineSimilarityMatrix = np.load("cosineSimilarityMatrix.dat.npy")
    print("Matrix is loaded")
except FileNotFoundError:
    cosineSimilarityMatrix = np.zeros((N,N))
    for i in range(N):
        for j in range(i,N):
            cosineSimilarityMatrix[i,j] = MovieRecommender.CosS(i, j, df_subtracted)
            cosineSimilarityMatrix[j,i] = cosineSimilarityMatrix[i,j]
        if i % 100 == 0 or i == N-1:
            print(i, '/', N, end = '\r')
    # the matrix takes a long time to generate, so I would save it.
    np.save("cosineSimilarityMatrix.dat", cosineSimilarityMatrix)

# sort each row and keep the top 30 items
cosineSimilarityMatrixTop30 = nan_matrix = np.full((N, N), np.nan)#np.zeros((N,N))
np.fill_diagonal(cosineSimilarityMatrix, np.nan)
np.fill_diagonal(cosineSimilarityMatrixTop30, np.nan)

for i in range(N):
    row = cosineSimilarityMatrix[i]
    sorted_row = np.sort(row[np.invert(np.isnan(row))])
    # pdb.set_trace
    if len(sorted_row) > 0:
        try:
            thresh = sorted_row[-30]
        except:
            # less than 30 non-Nan values
            thresh = sorted_row[0]
        # pdb.set_trace()
        cosineSimilarityMatrixTop30[i] = cosineSimilarityMatrix[i]
        cosineSimilarityMatrixTop30[i, row < thresh] = float('nan')
np.save("cosineSimilarityMatrixTop30.dat", cosineSimilarityMatrixTop30)
        
MOVIE_RECOMMENDER = MovieRecommender()