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
    const onGenreSelect = (genre:string) => {
        setResultLoaded(false)
        setResultLoading(true)
        console.log(`Genre ${genre} selected`)
        // TODO: Replace with actual API call
        // API CALL START HERE

        // If API call failed please set resultFailed to true
        setResultFailed(false)
        // Expected result: an array of movies ids (number)
        // Randomly select 10 movies for now
        const randomIds: number[] = []
        while (randomIds.length < 10) {
            const randomId = Math.floor(Math.random() * 3000) + 1
            if (!randomIds.includes(randomId)) {
                randomIds.push(randomId)
            }
        }
        setTopMovies(randomIds) 
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

