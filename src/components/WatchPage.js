import React, { useDebugValue, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {

  const [searchParams]=useSearchParams();
  const videoId=searchParams.get("v");

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <div>
      <iframe width="1660" 
      height="700" 
      src={`https://www.youtube.com/embed/${videoId}`} 
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage