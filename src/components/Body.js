import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar';

export const Body = () => {
  return (
    <div className='flex grid-flow-col '>
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}
