import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import { AdVideoCard, VideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  // Step-2: Update the state with fetched videos
  const [videos, setVideos] = useState([]);

  // Fetch videos from YouTube API when the component mounts
  useEffect(() => {
    getVideos();
  }, []);

  // Step-1: Make an API call to YouTube to get videos
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    // Step-3: Render the first video as an ad and then iterate through the rest
    <div className='flex flex-wrap'>
      {/* Render the first video as an AdVideoCard if videos are available */}
      {videos.length > 0 && <AdVideoCard info={videos[0]} />}

      {/* Render the rest of the videos */}
      {videos.length > 0 &&
        videos.slice(1).map((video) => (
          <Link to={"watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
