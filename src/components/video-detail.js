import React from 'react';

//this component won't need to keep track of state so it makes sense to only use a function-based component, instead of class-based
const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  //ES6 template string (string interpolation)
  //use backticks, wrap your vars in curlies, preceed it all with a $ symbol
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;