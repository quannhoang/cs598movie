import React from 'react'
import GenreHorizontal from './GenreHorizontal'
import {IMovie} from './PreferencesPanel'
import MovieRate from './MovieRate';

const GenreSamples = (
    {
        genre, 
        movies, 
        samples,
        userMovieRates,
        onMovieRate,
    }:
    {
        genre: string, 
        movies: any[],
        samples: number[],
        userMovieRates: {[key: number]: {id: number, score: number}},
        onMovieRate: (id: number, score: number) => void
    }) => {
  return (
    <>
        <br />
        <div className='text-center px-12 '>
        <GenreHorizontal name={genre}/>
        <hr className='border-orange-800'/>
        </div>
        <div className='flex flex-wrap justify-center font-light'>
                    {movies && samples.map((id:any) => {
                        const currentMovie :IMovie = movies[id]
                        if (userMovieRates[id]) {
                            return (
                                <MovieRate key={id} id={id} title={currentMovie.title} onMovieRate={onMovieRate} inputScore={userMovieRates[id].score}/>
                            )
                        }
                        return (
                            currentMovie &&  <MovieRate key={id} id={id} title={currentMovie.title} onMovieRate={onMovieRate} inputScore={0}/>
                        )
                    })}
        </div>
        <br />
    </>
  )
}

export default GenreSamples