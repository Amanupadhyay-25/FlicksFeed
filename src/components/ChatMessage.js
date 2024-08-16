import React from 'react'
import { LIVE_USER_LOGO } from '../utils/constant'

const ChatMessage = ({message,name}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
       <img
       className='h-8'
       alt='userlogo of live chat'
       src={LIVE_USER_LOGO}
       />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage