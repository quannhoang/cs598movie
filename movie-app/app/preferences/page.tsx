'use client';
import Navigation from '../../components/Navigation'
import Header from '../../components/Header'
import PreferencesPanel from '../../components/PreferencesPanel'
import ResultsPanel from '../../components/ResultsPanel'
import React, { useEffect, useState } from 'react';

const sampleResults = [1,2,3,4,5,6,7,8,9,10]
export default function Page () {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/data/movies.json')
          .then((res) => res.json())
          .then((data) => {
            setMovies(data)
            setLoading(false)
          })
      }, [])
    return (
        <>
            <div id='main'>
                <Header />
                <br />
                <Navigation selected='preferences' />
                <br />
                <PreferencesPanel key='preferences' movies={movies} loading={loading}/>
                <br />
                <ResultsPanel ids={sampleResults} movies={movies} loading={loading}/>
            </div>
        </>
    )
}

