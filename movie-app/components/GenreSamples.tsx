import React from 'react'
import GenreHorizontal from './GenreHorizontal'
import {IMovie} from './PreferencesPanel'
import MovieRate from './MovieRate';

const GenreSamples = ({genre, movies, samples}:{genre: string, movies: any[],samples: number[]}) => {
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
                        return (
                            currentMovie &&  <MovieRate key={id} id={id} title={currentMovie.title}/>
                        )
                    })}
        </div>
        <br />
    </>
  )
}

export default GenreSamples