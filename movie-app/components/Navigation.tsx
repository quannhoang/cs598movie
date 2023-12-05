import React from 'react'
import { MdMovieFilter } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';


const Navigation = ({selected}:{selected:string}) => {
  return (
    <>
        <div className='flex text-xl font-light text-orange-900 text-center w-full '>
            <div className='w-1/5'></div>
            <div className='flex w-3/5 justify-center'>
                <Link className='flex  hover:text-orange-400' href='/'> 
                    <MdMovieFilter className='h-full'/>
                    <span className={selected==='genres' ? 'pl-2 underline': 'pl-2'}>Recommend By Genres</span>
                </Link>
                <div className='px-3'>|</div>
                <Link className='flex  hover:text-orange-400' href='/preferences'>
                <span className={selected==='preferences' ? 'pr-2 underline': 'pr-2'}>Recommend By Preferences</span>
                <FaRegHeart className='h-full'/>
                </Link>
            </div>
            <div className='w-1/5'></div>
        </div>
    </>

  )
}

export default Navigation