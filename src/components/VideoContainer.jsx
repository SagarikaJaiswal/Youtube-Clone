import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const info = await data.json();
    setVideos(info.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  //console.log(videos);
  if (videos.length < 1) return;
  return (
    <div className="flex flex-wrap">
      {videos.map((v) => (
        <Link to={"/watch?v=" + v.id} key={v.id}>
          <VideoCard info={v} />
        </Link>
      ))}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;
