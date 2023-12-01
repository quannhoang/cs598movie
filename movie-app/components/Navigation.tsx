import React from 'react'

const Navigation = () => {
  return (
    <>
        <div className='flex text-xl font-light text-orange-500 text-center w-full'>
            <div className='w-1/5'></div>
            <div className='flex w-3/5 justify-center'>
                <button className=''>Recommend By Genres</button>
                <div className='px-3'>|</div>
                <button className=''>Recommend By Preferences</button>
            </div>
            <div className='w-1/5'></div>
        </div>
    </>

  )
}

export default Navigation