import React from 'react';


const VideoDetail = ({ video }) => {
  
  if(!video) return <div></div>
  
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
      <div>
        <div>
          <iframe 
            className="iframe" 
            frameBorder="0" 
            title="Video Player" 
            src={videoSrc}
          />
        </div>
        <div className="video-snippet-description">
        <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
        {video.snippet.description}
        </div>
  </div>
  )
}

export default VideoDetail;