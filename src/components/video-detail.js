import React from 'react';

//This component won't need to keep track of state so it makes sense to only use a function based component.
//No need to extend or even import Component from React.
const VideoDetail = ({video}) => {
  //Small check for initial page render. If we haven't heard back from YouTube yet, we don't have a video.
  if(!video){
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  //ES6 template string (string interpolation)
  //use backticks and you can use vars like this: ${myVar} right inside the string.
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