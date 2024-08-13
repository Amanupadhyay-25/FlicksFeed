import React from 'react'
import { FLICK_FEED, MENU_CDN, USER_LOGO } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {


  const dispatch=useDispatch();

const toggleMenuHandler=()=>{
  dispatch(toggleMenu());
}

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg' >
      <div className='flex col-span-1 '>
        <img 
        onClick={()=>toggleMenuHandler()}
       className=' h-8 cursor-pointer'
        alt='hamburger menu'
        src={MENU_CDN}
        />
        <img
       className='h-8 mx-2 cursor-pointer '
        alt='youtube-logo'
        src={FLICK_FEED}
        />
        </div>
        <div className='col-span-10 text-center'>
        <input
        className='w-1/2 border border-gray-400 rounded-l-3xl p-2'
        type='text'
        />
        <button className='border border-gray-400 p-2 rounded-r-3xl bg-gray-200'>🔍</button>
        </div>
        <div className='col-span-1'>
          <img
           className=' h-8'
          alt='user-logo'
          src={USER_LOGO}
          />
        </div>
      </div>
  )
}

export default Head