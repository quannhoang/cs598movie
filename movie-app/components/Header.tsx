import React from 'react'

const Header = () => {
  return (
    <>
        <div className='flex'>
        <div className='w-1/3 bg-orange-200 rounded-l-xl'></div>
            <div className='w-1/3  bg-orange-400 text-center block text-white p-3 font-thin text-2xl'>Movie Recommender</div>
            <div className='w-1/3 bg-orange-200 rounded-r-xl'></div>
        </div>
    </>

  )
}
export default Header