'use client';
// import React from 'react';
import { useState } from 'react';
import { SearchBar } from "./components/searchBar";
import { VideoDetail } from './components/videoDetail';
import { VideoList } from './components/videoList';
import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelect = (selectedVideo) => {
    setSelectedVideo(selectedVideo);
  }

  const videoSearch = (term) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video',
    }

    axios
        .get(url, { params })
// The above grabs data from api, below grabs data from ./data.json
        // .get('./data.json', { params })
        .then((response) => {
          console.log(response.data.items);
          setVideos(response.data.items);
          setSelectedVideo(response.data.items[0]);
        })
        .catch((error) => {
          console.error(error);
        });
  }
  return (
    <div className='row justify-content-center'>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
    </div>
  );
}
