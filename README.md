# This repo contains code needed to run a movie recommender application with nextjs frontend and flask backend.
# For the version of app we are running on AWS visit 
http://ec2-54-211-141-162.compute-1.amazonaws.com:3000

## Step 1: Running the front end

Step 1.1: Install nodejs version 19.0.0 or later 
Please follow the official guide for your OS installation 
[Nodejs installation using package manager](https://nodejs.org/en/download/package-manager/)

Step 1.2: Install nodejs packages

Move to the movie-app directory
```bash
cd cs598movie/movie-app
```
Install required nodejs packages
```bash
npm install
```

Step 1.3: Build and run the app
Build the app
```bash
npm run build
```
Run the app
```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Step 1.3A (Alternative): Run the app on development/hot-reload mode. 

***Note: this mode will run slower and consume more resources***
```bash
npm run dev
```


## Step 2: Running the back end

Step 2.1: Install python3 and pip3 on your computer
Please follow the official guide for your OS installation 
[Python3 downloads](https://www.python.org/downloads/)

Step 2.2: Install required python packages

Move to the movie-app/server directory
```bash
cd cs598movie/movie-app/server
```
Install required python packages
```bash
pip3 install -r requirements.txt
```

Step 2.3: Run the backend app (Flask)
```bash
flask --app app run
```


