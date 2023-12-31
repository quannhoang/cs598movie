import React from 'react'
import { GoStarFill } from "react-icons/go";
import { FiStar } from "react-icons/fi";

// Display five stars, with the number of filled stars determined by the score
const RateBar = (
    {
        score,
        setScore
    }:
    {
        score:number,
        setScore: (score:number) => any
    }) => {
    const [hoverScore, setHoverScore] = React.useState(0)
  return (
    <>
        <div className='flex flex-wrap justify-center font-light text-lg text-orange-400'>
            <div className='flex flex-row'>
                <button 
                    onClick={() => setScore(1)} 
                    onMouseOver={() => setHoverScore(1)} 
                    onMouseOut={() => setHoverScore(0)}
                >
                    {score >= 1 || hoverScore >= 1 ? <GoStarFill /> : <FiStar />}
                </button>
                <button 
                    onClick={() => setScore(2)} 
                    onMouseOver={() => setHoverScore(2)} 
                    onMouseOut={() => setHoverScore(0)}
                >
                    {score >= 2 || hoverScore >= 2 ? <GoStarFill /> : <FiStar />}
                </button>
                <button 
                    onClick={() => setScore(3)} 
                    onMouseOver={() => setHoverScore(3)} 
                    onMouseOut={() => setHoverScore(0)}
                >
                    {score >= 3 || hoverScore >= 3 ? <GoStarFill /> : <FiStar />}
                </button>
                <button 
                    onClick={() => setScore(4)} 
                    onMouseOver={() => setHoverScore(4)} 
                    onMouseOut={() => setHoverScore(0)}
                >
                    {score >= 4 || hoverScore >= 4 ? <GoStarFill /> : <FiStar />}
                </button>
                <button 
                    onClick={() => setScore(5)} 
                    onMouseOver={() => setHoverScore(5)} 
                    onMouseOut={() => setHoverScore(0)}
                >
                    {score >= 5 || hoverScore >= 5 ? <GoStarFill /> : <FiStar />}
                </button>
            </div>
        </div>
    </>
  )
}

export default RateBar