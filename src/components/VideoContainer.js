import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import { VideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  //Step-2: update the state from khali container to bhardo
  const [videos,setVideos]=useState([]);

//Ye jb render hoga tabhi api call hoga ..phle baar render jarne pe hi api call kardo
useEffect(()=>{
   getVideos();
},[]);

//Step-1: Make API call from youtube
const getVideos=async()=>{
  const data=await fetch(YOUTUBE_VIDEO_API);
  const json=await data.json();
  // console.log(json.items);
  setVideos(json.items);
}

  return (
    // Step-3: here first me make call for one then we iterate it
    <div className='flex flex-wrap'>
    {videos.length>0 &&
      videos.map((video)=>(
       <Link to={"watch?v=" + video.id}>
      < VideoCard info={video} />
      </Link>
    ))}
    </div>
  )
}

export default VideoContainer