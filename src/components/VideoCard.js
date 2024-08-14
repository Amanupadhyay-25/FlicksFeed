import React from 'react'


//Step-4 : 
export const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics}=info;
    const {thumbnails,channelTitle,title}=snippet;
  return (
    <div className='shadow-lg p-2 m-2 w-72 '>
        <img
        alt="thumbnails"
        src={thumbnails.medium.url}
        />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
};

export const AdVideoCard=({info})=>{
  return(
    <div className='p-1 m-1 border border-red-700 cursor-progress'>
      <VideoCard info={info}/>
    </div>
  )
}
