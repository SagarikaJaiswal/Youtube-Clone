import React, { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomText } from "../utils/helper";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          text: makeRandomText(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="m-2 w-[450px] h-[550px] border border-black bg-slate-100 rounded-lg flex flex-col-reverse overflow-scroll">
        {chatMessages.map((c, index) => {
          return <LiveChat key={index} name={c.name} text={c.text} />;
        })}
        {/* <LiveChat name={chatMessages[0].name} text={chatMessages[0].text} /> */}
      </div>
      <form
        className="flex border border-black mx-2 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Sagarika Jaiswal",
              text: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-96 p-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 bg-green-50 p-2">Send</button>
      </form>
    </div>
  );
};

export default LiveChatContainer;
