import React from 'react';

const VideoItem = ({ video, videoSelected }) => {
  
  return (

    <div className="VideoItem" >
      <div className="videoSelected"
       onClick={() => videoSelected(video)}>
        <img 
        alt="thumbnail" 
        src={video.snippet.thumbnails.medium.url}
        />
      </div>
      <div>
        <p><b>{video.snippet.title}</b></p>
      </div>
    </div>
    
    
  )
}

export default VideoItem;