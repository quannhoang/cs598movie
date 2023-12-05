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
    const onGenreSelect = (genre:string) => {
        setResultLoaded(false)
        setResultLoading(true)
        console.log(`Genre ${genre} selected`)
        // Hardcoded for now
        // TODO: Replace with actual API call
        // Create a random list of 10 ids from 1 to 3000
        // Do not accept duplicates
        const randomIds: number[] = []
        while (randomIds.length < 10) {
            const randomId = Math.floor(Math.random() * 3000) + 1
            if (!randomIds.includes(randomId)) {
                randomIds.push(randomId)
            }
        }
        setTopMovies([])
        setTopMovies(randomIds) 
        setResultLoading(false)
        setResultLoaded(true)
        // Scroll to bottom
        window.scrollTo(0,document.body.scrollHeight);
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
                <ResultsPanel resultLoading={resultLoading} resultLoaded={resultLoaded} ids={topMovies} movies={movies}/>
            </div>
        </>
    )
}

