import React from "react";
import { VideoListItem } from './videoListItem';

export const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return <ul className="col-12 col-md-4 mx-auto list-group">{videoItems}</ul>;
}