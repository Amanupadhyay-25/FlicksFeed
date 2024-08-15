import React, { useDebugValue, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

  const [searchParams]=useSearchParams();
  const videoId=searchParams.get("v");

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <div className=''>
      <iframe width="800" 
      height="500" 
      src={`https://www.youtube.com/embed/${videoId}`} 
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen></iframe>
      <CommentsContainer/>
    </div>
  )
}

export default WatchPage