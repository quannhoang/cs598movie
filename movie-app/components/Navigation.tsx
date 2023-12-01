import React from 'react'
import { MdMovieFilter } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";


const Navigation = () => {
  return (
    <>
        <div className='flex text-xl font-light text-orange-900 text-center w-full'>
            <div className='w-1/5'></div>
            <div className='flex w-3/5 justify-center'>
                <button className='flex'> 
                    <MdMovieFilter className='h-full'/>
                    <span className='pl-2'>Recommend By Genres</span>
                </button>
                <div className='px-3'>|</div>
                <button className='flex'>
                <span className='pr-2'>Recommend By Preferences</span>
                <FaRegHeart className='h-full'/>
                </button>
            </div>
            <div className='w-1/5'></div>
        </div>
    </>

  )
}

export default Navigation