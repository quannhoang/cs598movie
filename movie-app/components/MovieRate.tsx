import React, { use } from 'react'
import RateBar from './RateBar'
import Movie from './Movie'
import { useEffect } from 'react'

const MovieRate = (
    {
        id, 
        title,
        inputScore,
        onMovieRate
    } : 
    {
        id: number, 
        title: string,
        inputScore: number,
        onMovieRate: (id: number, score: number) => void
    }) => {
    const setScore = (score: number) => {
        onMovieRate(id, score)
    }
    return (
        <div className='block h-100px w-100px'>
            <Movie id={id} title={title}/>
            <div className='w-100 text-center'>
                <RateBar score={inputScore} setScore={setScore}/>
            </div>
        </div>
    )
}

export default MovieRate