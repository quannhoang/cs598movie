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
    const [topIds, setTopIds] = useState<number[]>([])
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
        setTopIds([])
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
        setTopIds([])
        setTopIds(randomIds) 
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
                <ResultsPanel resultLoading={resultLoading} resultLoaded={resultLoaded} ids={topIds} movies={movies} reset={reset} />
            </div>
        </>
    )
}

