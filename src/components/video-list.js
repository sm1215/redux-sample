import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //React likes when arrays have unique keys so it knows which item to update
    //Here we can use the videoId that YouTube provides
    return (
      <VideoListItem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {/* React is able to interpret arrays and render them accordingly. This will produce a list of li's */}
      {videoItems}
    </ul>
  );
};

export default VideoList;