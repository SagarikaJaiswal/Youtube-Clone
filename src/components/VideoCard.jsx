import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { url, width, height } = info?.snippet?.thumbnails?.medium;
  const { channelTitle, description, publishedAt, title } = info?.snippet;
  const { viewCount } = info?.statistics?.viewCount;
  //console.log(viewCount);
  return (
    <div className="flex flex-col w-72 h-max p-2 m-2 shadow-lg">
      <div className="rounded-lg items-center">
        <img src={url} alt="thumbnail" className="rounded-lg" />
      </div>
      <div className="flex flex-col">
        <div className="font-bold whitespace-break-spaces overflow-hidden text-ellipsis">
          {title}
        </div>
        <div>{channelTitle}</div>
        <div>{viewCount}</div>
      </div>
    </div>
  );
};

export default VideoCard;
