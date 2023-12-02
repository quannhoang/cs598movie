import React from 'react'
import RateBar from './RateBar'
import Movie from './Movie'

const MovieRate = ({id, title} : {id: string, title: string}) => {
    const [score, setScore] = React.useState(0)
    const onRate = (score:number) => {
        setScore(score)
        console.log(`Movie ${id} rated ${score}`)
    }
    return (
        <div className='block h-100px w-100px'>
            <Movie id={id} title={title}/>
            <div className='w-100 text-center'>
                <RateBar score={score} setScore={onRate}/>
            </div>
        </div>
    )
}

export default MovieRate