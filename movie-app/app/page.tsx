'use client';
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import GenresPanel from '../components/GenresPanel'
import ResultsPanel from '../components/ResultsPanel'
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [movies, setMovies] = useState([])
    const [resultLoaded, setResultLoaded] = useState(false)
    const [resultLoading, setResultLoading] = useState(false)
    const [resultFailed, setResultFailed] = useState(false)
    const [topMovies, setTopMovies] = useState<number[]>([])
    useEffect(() => {
        fetch('/data/movies.json')
          .then((res) => res.json())
          .then((data) => {
            setMovies(data)
          })
      }, [])
    const reset = () => {
        setResultLoaded(false)
        setResultLoading(false)
        setTopMovies([])
    }
    const onGenreSelect = async (genre:string) => {
        setResultLoaded(false)
        setResultLoading(true)
        if (genre === "Children") {
            genre = "Children's"
        }

        console.log(`Genre ${genre} selected`)
        let movieIds = []
        
        try {
            // Add CORS header
            const response = await fetch(`http://localhost:5000/api/genres/${genre}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  }
            })
            const data = await response.json();
            console.log(data["movies"]);
            movieIds = data["movies"]
            
            setResultLoaded(true)
          } catch (error) {
            console.error('Error:', error);
            setResultFailed(true)
        }
        
        setTopMovies([])
        setTopMovies(movieIds) 
        setResultLoading(false)
        // Scroll to bottom
        window.scrollTo(0,document.body.scrollHeight);
        setResultLoading(false)
        setResultLoaded(true)
    }
    return (
        <>
            <div id='main'>
                <Header />
                <br />
                <Navigation selected='genres'/>
                <br />
                <GenresPanel key='genres' onGenreSelect={onGenreSelect}/>
                <br />
                <ResultsPanel resultLoading={resultLoading} resultLoaded={resultLoaded} resultFailed={resultFailed} ids={topMovies} movies={movies}/>
            </div>
        </>
    )
}

