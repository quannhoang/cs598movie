'use client';
import Navigation from '../../components/Navigation'
import Header from '../../components/Header'
import PreferencesPanel from '../../components/PreferencesPanel'
import ResultsPanel from '../../components/ResultsPanel'
import React, { useEffect, useState } from 'react';

export interface IUserMovieRate {
    id: number,
    score: number
}


export default function Page () {
    const [movies, setMovies] = useState([])
    const [moviesLoading, setMoviesLoading] = useState(true)
    const [topMovies, setTopMovies] = useState<number[]>([])
    const [resultLoaded, setResultLoaded] = useState(false)
    const [resultLoading, setResultLoading] = useState(false)
    const [resultFailed, setResultFailed] = useState(false)
    // userMovieRate is an object with keys as movie ids and values as IUserMovieRate
    const [userMovieRates, setUserMovieRates] = useState<{[key: number]: IUserMovieRate}>({})

    const onMovieRate = (id: number, score: number) => {
        const newUserMovieRates = {...userMovieRates}
        newUserMovieRates[id] = {id, score}
        setUserMovieRates(newUserMovieRates)
        console.log(`Movie ${id} rated ${score}`)
    }

    const onReset = () => {
        console.log('Reset movie rates')
        setUserMovieRates({})
        window.scrollTo(0,0);
    }

    const onGetRecommendations = async () => {
        setResultLoaded(false)
        setResultLoading(true)
        console.log('Get recommendations')
        console.log(userMovieRates)
        // make a request dict for ratings
        const response = await fetch('http://localhost:5000/api/movies_for_ratings', {method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
            body: JSON.stringify({"ratings": userMovieRates}),
        });
        // if failed
        if (!response.ok) {
            console.log('Failed to get recommendations')
            setResultFailed(true)
            setResultLoading(false)
            return
        }
        let data = await response.json();
        console.log(data)
        setTopMovies(data.movies)
        setResultLoaded(true)
        // scroll to bottom 
        window.scrollTo(0,document.body.scrollHeight);
        setResultLoading(false)
        setResultLoaded(true)
    }

    useEffect(() => {
        fetch('/data/movies.json')
          .then((res) => res.json())
          .then((data) => {
            setMovies(data)
            setMoviesLoading(false)
          })
      }, [])

    return (
        <>
            <div id='main'>
                <Header />
                <br />
                <Navigation selected='preferences' />
                <br />
                <PreferencesPanel 
                    key='preferences' 
                    movies={movies} 
                    loading={moviesLoading} 
                    userMovieRates={userMovieRates} 
                    onMovieRate={onMovieRate}
                    onGetRecommendations={onGetRecommendations}
                    onReset={onReset}
                />
                <br />
                <ResultsPanel ids={topMovies} movies={movies} resultLoading={resultLoading} resultLoaded={resultLoaded} resultFailed={resultFailed}/>
            </div>
        </>
    )
}

