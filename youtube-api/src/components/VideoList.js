import React from 'react';


import VideoItem from './VideoItem';

const VideoList = ({ videos, videoSelected }) => {

  const listOfVideos = videos.map((video, id) => 

  <VideoItem 
    videoSelected={videoSelected} 
    key={id} 
    video={video} 
  />);

  return (
    <div className="listOfVideos">
      {listOfVideos}
    </div>
  )
}

export default VideoList;