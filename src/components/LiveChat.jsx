import React from "react";

const LiveChat = ({ name, text }) => {
  return (
    <div className="p-2 flex flex-wrap items-center shadow-md">
      <img
        className="w-8 h-8"
        src="https://static.vecteezy.com/system/resources/thumbnails/007/296/443/small_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
        alt="user"
      />
      <div className="font-bold px-2 w-fit relative whitespace-nowrap">
        {name}
      </div>
      <div className="flex flex-wrap">{text}</div>
    </div>
  );
};

export default LiveChat;
