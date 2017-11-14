import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //react likes when arrays have unique keys so it knows which item to update
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.id.videoId}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {/* React is able to interpret arrays and render them accordingly */}
      {videoItems}
    </ul>
  );
};

export default VideoList;